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
            grid: {
                all: [],
                filtered: []
            },
            character: '',
            characters: []
        };
        this.fillInGrid = this.fillInGrid.bind(this);
        this.chooseCharacter = this.chooseCharacter.bind(this);
        this.filter = this.filter.bind(this);
        this.axiosGetAll = this.axiosGetAll.bind(this);
    }

    componentDidMount() {
        this.axiosGetAll();
    }

    axiosGetAll() {
        this.props.fetchByAlignment(this.props.alignment).then(data => {
            console.log(`Successfully retrieved ${this.props.alignment} characters from DB.`);
            this.setState({
                characters: this.props.characters,
                grid: {
                    all: this.fillInGrid(this.props.characters)
                }
            });
            console.log(this.state);
        }).catch(error => console.error(`Failed to retrieve ${this.props.alignment} characters from DB b/c ${error}`));
    }

    /**
     * Populates state's grid of characters to display
     * @param {*} characters Array of DB characters
     * @param {*} filtered Determines which grid key to fill in
     */
    fillInGrid(characters, filtered = false) {
        const grid = [];
        let currentRow = [];
        for (let i = 0; i < characters.length; i++) {
            if (currentRow.length < 3) {
                currentRow.push(characters[i]);
            } else {
                grid.push(currentRow);
                currentRow = [];
            }
        }
        this.setState({
            grid: {
                [filtered ? 'filtered' : 'all']: grid
            }
        });
        console.log('Filled in grid', grid);
        return grid;
    }

    chooseCharacter(character) {
    }

    filter(substring) {
        console.group(`Filtering for '${substring}'...`);
        const filtered = this.state.characters.filter(character => character.fullName && character.fullName.toLowerCase().includes(substring.toLowerCase()));
        if (!substring) { // If no substring is provided...
            console.log('No substring given.')
            this.setState(state => ({
                grid: {
                    ...state.grid,
                    filtered: []
                }
            }))
            console.log('Resulting state:', this.state)
        } else { // If a substring is passed in...
            this.fillInGrid(filtered, true);
        }
        console.log(`Found ${filtered.length} results...`)
        console.log(filtered);
        console.groupEnd();
    }

    render() {
        const chosenCharacter = (
            <CardBody>
                <ChosenCharacter character={this.state.character} />
            </CardBody>
        );

        const grid = (incomingGrid, className) => {
            console.log('Incoming grid', incomingGrid, className);
            if (incomingGrid && incomingGrid.length) {
                return (<div>
                    {incomingGrid.map((row, r) => {
                        return <div key={r} className={className}><Row>
                            {row.map((column, c) => {
                                return <Col xs={12} sm={6} md={4} key={c}>
                                    <Character character={incomingGrid[r][c]} chooseCharacter={this.chooseCharacter} />
                                </Col>
                            })}
                        </Row></div>
                    })}
                </div>)
            }
        }

        return (
            <Card className={`body-card characters-body ${this.state.character && 'flip'}`}>
                <CardBody className="characters-gird">
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>
                    {this.state.grid && this.state.grid.filtered && this.state.grid.filtered.length}
                    {this.state.grid.filtered && this.state.grid.filtered.length ? grid(this.state.grid.filtered, 'filtered-results') : grid(this.state.grid.all, 'all-results')}
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col md={6}>
                            <Search alignment={this.props.alignment} filter={this.filter} />
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
