import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Character } from '../index'
import { Row, Col } from 'reactstrap';

class Results extends Component {
    constructor() {
        super();
        this.chooseCharacter = this.chooseCharacter.bind(this);
    }

    componentDidMount() {
    }

    chooseCharacter(character) {
        this.props.chooseCharacter(character);
    }

    render() {
        return (<div>
            <Row>
                {this.props.characters && this.props.characters.map((character, i) => {
                    return <Col key={i} className="col-4">
                        <Character character={character} chooseCharacter={this.chooseCharacter} />
                    </Col>
                })}
            </Row>
        </div>);
    }
}

export default withRouter(
    connect(
        null, null
    )(Results)
);
