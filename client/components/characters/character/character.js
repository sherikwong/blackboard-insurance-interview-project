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
        event.preventDefault();
        this.props.chooseCharacter(this.props.character);
    }

    render() {
        return (
            <Card className="character-card" onClick={this.chooseCharacter}>
                <img src={this.props.character.url} />
                <CardFooter>{this.props.character.fullName}</CardFooter>
            </Card>
        )
    }
}

export default Character;
