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

    chooseCharacter(character) {
        this.setState({ character });
    }

    filter(substring) {
        const filtered = this.state.characters.filter(character => character.fullName && character.fullName.toLowerCase().includes(substring.toLowerCase()));
        this.setState({
            filtered: substring ? filtered : []
        })
    }

    render() {
        const chosenCharacter = (
            this.state.character && <ChosenCharacter character={this.state.character />}
        );

        const showResults = (
            <div className="h-100 d-flex flex-column card-face">
                <CardBody className="characters-grid">
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>
                    <div className="overflow-scroll h-100">
                        <Results characters={this.state.filtered && this.state.filtered.length ? this.state.filtered : this.props.characters} chooseCharacter={this.chooseCharacter} />
                    </div>
                </CardBody>
                <CardFooter>
                    <Search alignment={this.props.alignment} filter={this.filter} />
                </CardFooter>
            </div>
        )

        return (
            <div className="flip-card characters-body">
                <div className={`flip-card-inner ${this.state.character && 'flip'}`}>
                    <Card className="h-100 results-card">
                        <div className="flip-card-front">
                            {showResults}
                        </div>
                        <div className="flip-card-back">
                            {chosenCharacter}
                        </div>
                    </Card>
                </div>
            </div>
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
