import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
// import { fetchBiographyById } from '../store/superheroes'

// eslint-disable-next-line react/prefer-stateless-function

class InitialLoader extends Component {
    constructor() {
        super();
        this.state = {

        };
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
