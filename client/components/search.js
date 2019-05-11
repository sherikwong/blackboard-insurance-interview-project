import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { InputGroup, Input, InputGroupAddon, Button, Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { filterBySubstring } from '../store/superheroes'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            substring: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }

    componentDidMount() {
        // this.props.filterBySubstring()
    }

    handleSearchChange(event) {
        this.setState({ substring: event.target.value });
    }

    submitSearch(event) {
        event.preventDefault();
        this.props.filterBySubstring(this.state.substring, this.props.alignment, this.props.characters);
        console.log('Props', this.props);
        console.log('State', this.state);
    }

    render() {
        return (
            <form onSubmit={this.submitSearch}>
                <InputGroup>
                    <Input placeholder="Search..." onChange={this.handleSearchChange} />
                    <InputGroupAddon addonType="append" className="m-0">
                        <Button color="secondary">
                            <FontAwesomeIcon icon="search" />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        )
    }
}
const mapState = (state, ownProps) => {
    return {
        characters: state.characters.alignment && state.characters.alignment[ownProps.alignment],
        filtered: ownProps
    };
}

const mapDispatch = dispatch => {
    return {
        filterBySubstring: (substring, alignment, allCharOfAlignment) => dispatch(filterBySubstring(substring, alignment, allCharOfAlignment))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(Search)
);
