import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStats } from '../../../store/superheroes';
import { InputGroup, InputGroupText, CardBody, Card, Input, InputGroupAddon } from 'reactstrap';

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
        setTimeout(() => {
            console.log(this.props);
        }, 1000)
    }

    render() {
        const keys = Object.keys(this.state);
        const values = Object.values(this.state);

        const groupField = (key, value) => (
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>{key}</InputGroupText>
                </InputGroupAddon>
                <Input className="unclickable" placeholder={value} />
            </InputGroup>
        )

        return (
            <div>
                <Card>
                    <img src={this.props.character.url} />
                    <CardBody>
                        {this.state.combat ? keys.map((key, i) => {
                            groupField(key, values[i]);
                        }) : null}
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
