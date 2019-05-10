import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Character } from './index'
import { fetchByAlignment } from '../store/superheroes'

// eslint-disable-next-line react/prefer-stateless-function

class Characters extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.fillInGrid = this.fillInGrid.bind(this);
    }

    componentDidMount() {
        this.fillInGrid();
    }

    fillInGrid() {
        this.props.fetchByAlignment(this.props.alignment).then(data => console.log(data)).catch(error => console.error(error));
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
        fetchByAlignment: alignment => dispatch(fetchByAlignment(alignment))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(Characters)
);
