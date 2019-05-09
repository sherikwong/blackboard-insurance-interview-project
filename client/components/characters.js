import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBiographyById } from './store/superheroes';
import '../public/style.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.fetchBiographyById(2);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapState = () => {
    return null;
}

const mapDispatch = dispatch => {
    return {
        fetchBiographyById: id => dispatch(fetchBiographyById(id))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )
        (App)
);
