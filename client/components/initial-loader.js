import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
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
                    this.props.currentLoadPercentage(Math.ceil(characterId / 3));
                    axios.get(`/api/superheroes/${characterId}`).then(response => console.log('aAAAAaAAAAaAAAAaAAAAaAAAAaAAAAaAAAAaAAAA', response.data)).catch(error => console.error(error));
                    return addToDB(characterId + 1);
                }).catch(error => {
                    console.error(error);
                })
            }
        }

        addToDB(1);
    }

    render() {
        return (
            <div className="initial-loader-wrapper flex-column">
                <img className="loading mb-4" />
                <Progress style={{ width: '20rem' }} color="primary" value={this.props.loadPercentage} />
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
