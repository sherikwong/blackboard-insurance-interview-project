import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody, CardFooter } from 'reactstrap';
import { Character, ChosenCharacter, Search, Pagination } from './index'
import { fetchByAlignment } from '../store/superheroes'

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            character: null
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
        this.setState({
            character
        });
    }

    render() {
        const chosenCharacter = (
            <CardBody>
                <ChosenCharacter character={this.state.character} />
            </CardBody>
        );

        const grid = (<div>
            {this.state.grid.map((row, r) => {
                return <Row key={r}>
                    {row.map((column, c) => {
                        return <Col xs={12} sm={6} md={4} key={c}>
                            <Character character={this.state.grid[r][c]} chooseCharacter={this.chooseCharacter} />
                        </Col>
                    })}
                </Row>
            })}
        </div>)

        return (
            <Card className={`body-card characters-body ${this.state.character && 'flip'}`}>
                <CardBody className="characters-gird">
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>
                    {this.state.grid.length && grid}
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col md={6}>
                            <Search alignment={this.props.alignment}/>
                        </Col>
                        <Col md={6}>
                            <Pagination />
                        </Col>
                    </Row>
                </CardFooter>
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
