import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBiographyById, fetchImageById } from '../store/superheroes';
import { Row, Col, Card, CardBody } from 'reactstrap';
import CardFooter from 'reactstrap/lib/CardFooter';

class Character extends Component {
    constructor() {
        super();
        this.chooseCharacter = this.chooseCharacter.bind(this);
    }

    componentDidMount() {
    }

    chooseCharacter() {
        event.preventDefault();
        this.props.chooseCharacter(this.props.character);
    }

    render() {
        return (
                <Card className="character-card"  onClick={this.chooseCharacter}>
                    <img src={this.props.character.url} />
                    <CardFooter>{this.props.character['full-name']}</CardFooter>
                </Card>
        )
    }
}

// const mapState = () => {
//     return null;
// }

const mapDispatch = dispatch => {
    return {
        fetchBiographyById: id => dispatch(fetchBiographyById(id)),
        fetchImageById: id => dispatch(fetchImageById(id)),
    }
}

export default withRouter(
    connect(
        null,
        mapDispatch
    )(Character)
);
