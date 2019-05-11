import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStats } from '../../../store/superheroes';
import { InputGroup, InputGroupText, CardBody, Card, Input, InputGroupAddon, Row, Col } from 'reactstrap';

class ChosenCharacter extends Component {
    constructor() {
        super();
        this.state = {
            combat: 0,
            intelligence: 0,
            power: 0,
            speed: 0,
            strength: 0,
            durability: 0
        }
    }

    componentDidMount() {
        this.getStats();
    }

    getStats() {
        this.props.fetchStats(this.props.character.id);
    }

    render() {
        const fieldsToView = {
            combat: this.props.stats.combat,
            intelligence: this.props.stats.intelligence,
            power: this.props.stats.power,
            speed: this.props.stats.speed,
            strength: this.props.stats.strength,
            durability: this.props.stats.durability
        }
        const keys = Object.keys(fieldsToView)
        const values = Object.values(fieldsToView)

        const groupField = (key, value) => (
            <InputGroup className="m-1">
                <InputGroupAddon addonType="prepend" className="w-50">
                    <InputGroupText className="w-100">{key}</InputGroupText>
                </InputGroupAddon>
                <Input className="unclickable" placeholder={value} className="w-50" />
            </InputGroup>
        )

        return (
            <div>
                <Card>
                    <img src={this.props.character.url} />
                    <CardBody>
                        <Row>
                            <Col>
                                {keys.slice(0, 3).map((key, i) => groupField(key, values[i]))}
                            </Col>
                            <Col>
                                {keys.slice(3, 6).map((key, i) => groupField(key, values[i]))}
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapState = (state, ownProps) => {
    return {
        stats: state.characters
    };
}

const mapDispatch = dispatch => {
    return {
        fetchStats: id => dispatch(fetchStats(id))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(ChosenCharacter)
);
