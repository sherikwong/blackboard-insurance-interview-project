import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { filterBySubstring } from '../store/superheroes'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            substring: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        // this.props.filterBySubstring()
    }

    handleSearchChange(event) {
        this.setState({ substring: event.target.value });
    }

    render() {
        return (
            <form>
                <InputGroup>
                    <Input placeholder="Search..." / onChange={this.handleSearchChange}>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary">
                            <FontAwesomeIcon icon="search" />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        )
    }
}
// const mapState = (state, ownProps) => {
//     return {
//         // characters: state.characters.alignment && state.characters.alignment[ownProps.alignment]
//     };
// }

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
