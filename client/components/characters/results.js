import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Character } from '../index'
import { Row, Col } from 'reactstrap';

class Results extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (<div>
            {this.props.grid && this.props.grid.map((row, r) => {
                return <div key={r} className={this.props.className}><Row>
                    {row.map((column, c) => {
                        return <Col xs={12} sm={6} md={4} key={c}>
                            <Character character={this.props.grid[r][c]} chooseCharacter={this.chooseCharacter} />
                        </Col>
                    })}
                </Row></div>
            })}
        </div>);
    }
}

export default withRouter(
    connect(
        null, null
    )(Results)
);