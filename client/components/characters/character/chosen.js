import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';

class ChosenCharacter extends Component {
    // constructor() {
    //     super();
    // }

    componentDidMount() {
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

const mapState = () => {
    return null;
}

const mapDispatch = () => {
    return {
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(ChosenCharacter)
);
