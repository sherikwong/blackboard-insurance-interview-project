import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Progress, Button } from 'reactstrap';
import axios from 'axios';
import { NUMBER_OF_SUPERHEROES } from '../../constants';

class InitialLoader extends Component {
    constructor() {
        super();
        this.state = {
            continue: false
        };
        this.loadAllCharactersIntoDB = this.loadAllCharactersIntoDB.bind(this);
        this.minimizeLoading = this.minimizeLoading.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.loadAllCharactersIntoDB();
        }, 2000);
    }

    loadAllCharactersIntoDB() {
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

    minimizeLoading() {
        this.setState({ continue: true });
        this.props.minimizeLoading();
    }

    render() {
        return (
            <div className={`initial-loader-wrapper ${this.state.continue && 'continue-anyways'}`}>
                <img className="loading mb-4" />
                <Progress color="secondary" value={this.props.loadPercentage} className="progress-barr" />
                <span className="mb-2 disappear">This is going to take a while...</span>
                <Button color="secondary" onClick={this.minimizeLoading}>Continue Anyways</Button>
            </div>
        )
    }
}

export default withRouter(InitialLoader);
