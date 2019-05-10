import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Progress, Button } from 'reactstrap';
import axios from 'axios';
import { NUMBER_OF_SUPERHEROES } from '../constants';

class InitialLoader extends Component {
    constructor() {
        super();
        this.state = {

        };
        this.loadAllCharactersIntoDB = this.loadAllCharactersIntoDB.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.loadAllCharactersIntoDB();
        }, 2000);
    }

    loadAllCharactersIntoDB() {
        const addToDB = characterId => {
            if (characterId <= NUMBER_OF_SUPERHEROES) {
                axios.get(`/api/superheroes-api/${characterId}`).then(response => {
                    const completedId = Math.floor(response.data / NUMBER_OF_SUPERHEROES);
                    this.props.currentLoadPercentage(completedId);
                    return addToDB(response.data + 1);
                }).catch(error => {
                    console.error(error);
                })
            }
        }

        // addToDB(1);
    }

    render() {
        return (
            <div className="initial-loader-wrapper flex-column text-white p-3">
                <img className="loading mb-4" />
                <Progress style={{ width: '20rem' }} color="primary" value={this.props.loadPercentage} className="mb-2" />
                <span className="mb-2">This is going to take a while...</span>
                <Button color="secondary">Continue Anyways</Button>
            </div>
        )
    }
}

const mapState = state => {
    return {
        // biography: state.biography
    };
}

const mapDispatch = dispatch => {
    return {
        // fetchBiographyById: id => dispatch(fetchBiographyById(id))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(InitialLoader)
);
