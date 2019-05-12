import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, CardFooter, Button } from 'reactstrap';
import { ChosenCharacter, Search, Results } from '../index'
import { fetchByAlignment } from '../../store/superheroes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            character: '',
            filtered: []
        };
        this.chooseCharacter = this.chooseCharacter.bind(this);
        this.filter = this.filter.bind(this);
        this.axiosGetAll = this.axiosGetAll.bind(this);
        this.back = this.back.bind(this);
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
        const filtered = this.props.characters.filter(character => character.fullName && character.fullName.toLowerCase().includes(substring.toLowerCase()));
        this.setState({
            filtered: substring ? filtered : []
        })
    }

    back() {
        this.setState({
            character: null
        })
        console.log(this.state);
        console.log(this.props);
    }

    render() {
        const chosenCharacter = (
            <ChosenCharacter className="h-100" character={this.state.character} back={this.back} />
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
                <Button color="secondary" className={`back-button ${this.state.character && 'show'}`} onClick={this.back}>
                    <FontAwesomeIcon icon="arrow-left" />
                </Button>
                <div className={`flip-card-inner ${this.state.character && 'flip'}`}>
                    <Card className="h-100 results-card">
                        <div className="flip-card-front">
                            {!this.state.character && showResults}
                        </div>
                        <div className="flip-card-back">
                            {this.state.character && chosenCharacter}
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
