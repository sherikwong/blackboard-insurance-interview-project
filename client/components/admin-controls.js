import React, { Component } from 'react'
import { Button } from 'reactstrap';
import axios from 'axios';
import { NUMBER_OF_SUPERHEROES } from '../constants'
import { fail } from '../../server/db/ascii'

class Admin extends Component {
    constructor() {
        super();
        this.dropDB = this.dropDB.bind(this);
        this.loadDB = this.loadDB.bind(this);
    }

    dropDB() {
        console.log('Dropping DB...');
        axios.post('/drop-db').then(() => console.log('Finished dropping DB...')).catch(() => console.error('Problem dropping db'));
    }

    loadDB() {
        const addToDB = (minId, maxId) => {
            const apiRequest = (id) => {
                axios.get(`/api/superheroes-api/${id}`).then(() => {
                    return addToDB(id + 1);
                })
            }

            axios.all([apiRequest(minId, maxId / 2), apiRequest((maxId / 2) + 1, maxId)])
                .catch(error => {
                    console.log(fail)
                    console.error(error);
                });
        }

        addToDB(1, NUMBER_OF_SUPERHEROES);
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.dropDB}>Drop Datebase</Button>
                <Button color="primary" onClick={this.loadDB}>Load Datebase</Button>
            </div>
        )
    }
}

export default Admin;
