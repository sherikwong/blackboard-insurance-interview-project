import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import { fetchStats } from '../../../store/superheroes';

class ChosenCharacter extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    getStats() {
        this.props.fetchStats(1)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Card>
                    <img src={this.props.character.url} />
                </Card>
            </div>
        )
    }
}

const mapState = (state, ownProps) => {
    return {
        stats: state
    };
}

const mapDispatch = dispatch => {
    return {
        fetchStats: id => dispatch(fetchStats(id))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(ChosenCharacter)
);
