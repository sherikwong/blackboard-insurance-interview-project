import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody, CardFooter } from 'reactstrap';
import { ChosenCharacter, Search, Pagination, Results } from '../index'
import { fetchByAlignment } from '../../store/superheroes'

const GRID_WITH_ALL_CHAR = 'GRID_WITH_ALL_CHAR';
const GRID_WITH_FILTERED = 'GRID_WITH_FILTERED';

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            [GRID_WITH_ALL_CHAR]: [],
            [GRID_WITH_FILTERED]: [],
            character: '',
            filtered: []
        };
        this.chooseCharacter = this.chooseCharacter.bind(this);
        this.filter = this.filter.bind(this);
        this.axiosGetAll = this.axiosGetAll.bind(this);
    }

    componentDidMount() {
        this.axiosGetAll();
    }

    axiosGetAll() {
        this.props.fetchByAlignment(this.props.alignment).then(() => {
            console.log(`Successfully retrieved ${this.props.alignment} characters from DB.`);
        }).catch(error => console.error(`Failed to retrieve ${this.props.alignment} characters from DB b/c ${error}`));
    }

    /**
     * Populates state's grid of characters to display
     * @param {*} characters Array of DB characters
     * @param {*} filtered Determines which grid key to fill in
     */
    // fillInGrid(characters, filtered = false) {
    //     const grid = [];
    //     let currentRow = [];
    //     for (let i = 0; i < characters.length; i++) {
    //         if (currentRow.length < 3) {
    //             currentRow.push(characters[i]);
    //         } else {
    //             grid.push(currentRow);
    //             currentRow = [];
    //         }
    //     }
    //     this.setState({
    //         [filtered ? GRID_WITH_FILTERED : GRID_WITH_ALL_CHAR]: grid
    //     });
    //     return grid;
    // }

    chooseCharacter(character) {
        this.setState({ character });
    }

    filter(substring) {
        // console.group(`Filtering for '${substring}'...`);
        const filtered = this.state.characters.filter(character => character.fullName && character.fullName.toLowerCase().includes(substring.toLowerCase()));
        this.setState({
            filtered: substring ? filtered : []
        })
        console.log(`Found ${filtered.length} results...`)
        console.log(filtered);
        console.log('Resulting state:', this.state)
        // console.groupEnd();
    }

    render() {
        const chosenCharacter = (
            <CardBody>
                <ChosenCharacter character={this.state.character} />
            </CardBody>
        );

        const showResults = (
            <div>
                <CardBody className="characters-gird">
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>
                    {/* <Results grid={this.state
                    [GRID_WITH_FILTERED] && this.state[GRID_WITH_FILTERED].length ? this.state
                        [GRID_WITH_FILTERED] : this.state[GRID_WITH_ALL_CHAR]} chooseCharacter={this.chooseCharacter} /> */}
                        <Results characters={this.state.filtered && this.state.filtered.length ? this.state.filtered : this.props.characters}/>
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
            </div>
        )

        return (
            <Card className={`body-card characters-body ${this.state.character && 'flip'}`}>
                {this.state.character ? chosenCharacter : showResults}
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
