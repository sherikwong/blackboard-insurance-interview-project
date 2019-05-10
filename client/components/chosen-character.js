import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBiographyById, fetchImageById } from '../store/superheroes';
import { Row, Col, Card, CardBody } from 'reactstrap';
import CardFooter from 'reactstrap/lib/CardFooter';

class ChosenCharacter extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Card>
                    <img src={this.props.character.url} />
                </Card>
            </div>
        )
    }
}

const mapState = () => {
    return null;
}

const mapDispatch = dispatch => {
    return {
        fetchBiographyById: id => dispatch(fetchBiographyById(id)),
        // fetchImageById: id => dispatch(fetchImageById(id)),
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(ChosenCharacter)
);
