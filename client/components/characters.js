import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Character } from './index'
import { fetchByAlignment } from '../store/superheroes'

// eslint-disable-next-line react/prefer-stateless-function

class Characters extends Component {
    constructor() {
        super();
        // this.state = {
        // };
        this.fillInGrid = this.fillInGrid.bind(this);
    }

    componentDidMount() {
        this.fillInGrid();
    }

    fillInGrid() {
        this.props.fetchByAlignment(this.props.alignment).then(data => {
            console.log(`Successfully retrieved ${this.props.alignment} characters from DB.`);
            console.log('Props', this.props);
        }).catch(error => console.error(`Failed to retrieve ${this.props.alignment} characters from DB b/c ${error}`));
    }

    render() {
        return (
            <Card className="body-card characters-body">
                <CardBody>
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>
                    {Array.from(Array(3), (e, i) => {
                        return <Row key={i}>
                            {Array.from(Array(3), (e, j) => {
                                return <Col key={j}><Character id={2}/></Col>
                            })}
                        </Row>
                    })}
                </CardBody>
            </Card>
        )
    }
}

const mapState = state => {
    console.log('Mapping state to props', state);
    return {
        characters: state.characters
    };
}

const mapDispatch = dispatch => {
    return {
        fetchByAlignment: alignment => dispatch(fetchByAlignment(alignment))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(Characters)
);
