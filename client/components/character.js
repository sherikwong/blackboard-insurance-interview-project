import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBiographyById, fetchImageById } from '../store/superheroes';
import { Row, Col, Card, CardBody } from 'reactstrap';

class Character extends Component {
    // constructor() {
    //     super();
    // }

    componentDidMount() {
    }

    render() {
        return (
            <Card className="character-card">
                <img src={this.props.character.url} />
                {/* <CardBody>
                </CardBody> */}
                    <div className="">{this.props.character['full-name']}</div>
            </Card>
        )
    }
}

const mapState = () => {
    return null;
}

const mapDispatch = dispatch => {
    return {
        fetchBiographyById: id => dispatch(fetchBiographyById(id)),
        fetchImageById: id => dispatch(fetchImageById(id)),
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(Character)
);
