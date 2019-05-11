import React, { Component } from 'react'
import { Button } from 'reactstrap';
import axios from 'axios';

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
        const addToDB = (characterId, max) => {
            console.log('Superhero #', characterId);
            if (characterId <= max) {
                axios.get(`/api/superheroes-api/${characterId}`).then(response => {
                    return addToDB(response.data + 1);
                }).catch(error => {
                    console.error(error);
                })
            }
        }

        addToDB(1, 20);
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
