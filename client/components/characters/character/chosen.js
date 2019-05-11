import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStats } from '../../../store/superheroes';
import { InputGroup, InputGroupText, Button, InputGroupAddon, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ChosenCharacter extends Component {
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
            <InputGroup key={key}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>{key}</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon addonType="append">{value}</InputGroupAddon>
            </InputGroup>
        )

        return (
            <div className="chosen-character-container">
                <div className="chosen-character-image" style={{ backgroundImage: `url(${this.props.character.url})` }}>
                    <div className="w-100 d-flex justify-content-start">
                        <Button color="secondary" className="btn-circle" onClick={() => this.props.back()}>
                            <FontAwesomeIcon icon="arrow-left" />
                        </Button>
                    </div>
                    <Row>
                        <Col>
                            {keys.slice(0, 3).map((key, i) => groupField(key, values[i]))}
                        </Col>
                        <Col>
                            {keys.slice(3, 6).map((key, i) => groupField(key, values[i]))}
                        </Col>
                    </Row>
                </div>
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
