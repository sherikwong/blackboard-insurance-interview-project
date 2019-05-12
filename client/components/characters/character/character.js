import React, { Component } from 'react'
import { Card } from 'reactstrap';
import CardFooter from 'reactstrap/lib/CardFooter';

class Character extends Component {
    constructor() {
        super();
        this.chooseCharacter = this.chooseCharacter.bind(this);
    }

    componentDidMount() {
    }

    chooseCharacter() {
        this.props.chooseCharacter(this.props.character);
    }

    render() {
        return (
            <Card className="character-card" onClick={this.chooseCharacter}>
                <img src={this.props.character.url} onError={(e) => { e.target.onerror = null; e.target.src = '/error.png' }} />
                <CardFooter>{this.props.character.fullName ? this.props.character.fullName : 'N/A'}</CardFooter>
            </Card>
        )
    }
}

export default Character;
