import React, { Component } from 'react'
import { Button } from 'reactstrap';
import axios from 'axios';
import { NUMBER_OF_SUPERHEROES } from '../constants'

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
        // const addToDB = (characterId) => {
        //     if (characterId <= NUMBER_OF_SUPERHEROES) {
        //         axios.get(`/api/superheroes-api/${characterId}`).then(response => {
        //             // const completedId = Math.floor(response.data / NUMBER_OF_SUPERHEROES);
        //             this.props.currentLoadPercentage(characterId);
        //             return addToDB(response.data + 1);
        //         }).catch(error => {
        //             console.error(error);
        //         })
        //     }
        // }

        // addToDB(1);

        const addToDB = (characterId) => {
            if (characterId <= NUMBER_OF_SUPERHEROES) {
                axios.get(`/api/superheroes-api/${characterId}`).then(response => {
                    // const completedId = Math.floor(response.data / NUMBER_OF_SUPERHEROES);
                    this.props.currentLoadPercentage(characterId);
                    return addToDB(response.data + 1);
                }).catch(error => {
                    console.error(error);
                })
            }
        }

        addToDB(1);
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
