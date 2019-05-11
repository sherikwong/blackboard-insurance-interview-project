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
        this.getStats();
    }

    getStats() {
        this.props.fetchStats(this.props.character.id);
        console.log(this.props);
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
