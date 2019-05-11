import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Character, ChosenCharacter } from './index'
import { fetchByAlignment } from '../store/superheroes'

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            character: null,
            flip: false
        };
        this.fillInGrid = this.fillInGrid.bind(this);
        this.chooseCharacter = this.chooseCharacter.bind(this);
    }

    componentDidMount() {
        this.fillInGrid();
    }

    fillInGrid() {
        this.props.fetchByAlignment(this.props.alignment).then(data => {
            console.log(`Successfully retrieved ${this.props.alignment} characters from DB.`);
            this.setState({
                characters: this.props.characters
            });

            const grid = [];
            let currentRow = [];
            for (let i = 0; i < this.props.characters.length; i++) {
                if (currentRow.length < 3) {
                    currentRow.push(this.props.characters[i]);
                } else {
                    grid.push(currentRow);
                    currentRow = [];
                }
            }
            this.setState({
                grid
            });
        }).catch(error => console.error(`Failed to retrieve ${this.props.alignment} characters from DB b/c ${error}`));
    }

    chooseCharacter(character) {
        setTimeout(() => {
            this.setState({
                flip: true
            });
        }, 1000);
        this.setState({
            character
        });
    }

    render() {
        const chosenCharacter = (
            <CardBody className="character-profile-wrapper">
                <ChosenCharacter character={this.state.character} />
            </CardBody>
        );

        return (
            <Card className={`body-card characters-body ${this.state.character && 'flip'}`}>
                <CardBody className="characters-gird">
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>
                    {this.state.grid.length && Array.from(Array(3), (e, i) => {
                        return <Row key={i}>
                            {Array.from(Array(3), (e, j) => {
                                return <Col xs={12} sm={6} md={4} key={j}>
                                    <Character character={this.state.grid[i][j]} chooseCharacter={this.chooseCharacter} />
                                </Col>
                            })}
                        </Row>
                    })}
                </CardBody>
                {this.state.flip && chosenCharacter};
            </Card>
        )

    }
}

const mapState = (state, ownProps) => {
    return {
        characters: state.characters.alignment && state.characters.alignment[ownProps.alignment]
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
