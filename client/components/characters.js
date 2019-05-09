import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Character } from './index'
import { fetchBiographyById } from '../store/superheroes'

// eslint-disable-next-line react/prefer-stateless-function

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            currentCharacterId: 1,
            idGrid: null
            // [
            //     [1, 2, 3],
            //     [4, 5, 6],
            //     [7, 8, 9]
            // ]
        };
        this.fillInGrid = this.fillInGrid.bind(this);
        this.checkAlignment = this.getAndCheckAlignment.bind(this);
    }

    componentDidMount() {
        this.fillInGrid();
    }

    fillInGrid() {
        const newGrid = new Array(3).fill(new Array(3).fill(0));
        newGrid.map((row, rowIndex) => {
            row.map((column, columnIndex) => {
                // this.getAndCheckAlignment(this.state.currentCharacterId);
            });
        })
    }

    getAndCheckAlignment(id) {
        this.props.fetchBiographyById(id);
    }

    render() {
        return (
            <Card className="body-card characters-body">
                <CardBody>
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>

                    {this.state.idGrid && this.state.idGrid.length && this.state.idGrid.map((row, rowIndex) => {
                        // eslint-disable-next-line react/no-array-index-key
                        return <Row key={rowIndex}>
                            {row.map((column, columnIndex) => {
                                // eslint-disable-next-line react/no-array-index-key
                                return <Col key={columnIndex}><Character id={this.state.idGrid[rowIndex][columnIndex]} page={this.state.page} /></Col>
                            })}
                        </Row>
                    })}
                </CardBody>
            </Card>
        )
    }
}

const mapState = state => {
    return {
        biography: state.biography
    };
}

const mapDispatch = dispatch => {
    return {
        fetchBiographyById: id => dispatch(fetchBiographyById(id))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(Characters)
);
