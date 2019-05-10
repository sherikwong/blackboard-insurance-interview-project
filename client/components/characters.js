import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Character } from './index'
import { fetchByAlignment } from '../store/superheroes'

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            grid: []
        };
        this.fillInGrid = this.fillInGrid.bind(this);
    }

    componentDidMount() {
        this.fillInGrid();
    }

    fillInGrid() {
        this.props.fetchByAlignment(this.props.alignment).then(data => {
            console.log(`Successfully retrieved ${this.props.alignment} characters from DB.`);
            this.setState({
                characters: this.props.characters
            });

            const grid = [];
            let currentRow = [];
            for (let i = 0; i < this.props.characters.length; i++) {
                if (currentRow.length < 3) {
                    currentRow.push(this.props.characters[i]);
                } else {
                    grid.push(currentRow);
                    currentRow = [];
                }
            }
            this.setState({
                grid
            });
        }).catch(error => console.error(`Failed to retrieve ${this.props.alignment} characters from DB b/c ${error}`));
    }

    render() {
        return (
            <Card className="body-card characters-body">
                <CardBody>
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>
                    {this.state.grid.length && Array.from(Array(3), (e, i) => {
                        return <Row key={i}>
                            {Array.from(Array(3), (e, j) => {
                                return <Col key={j}><Character character={this.state.grid[i][j]} /></Col>
                            })}
                        </Row>
                    })}
                </CardBody>
            </Card>
        )

    }
}

const mapState = (state, ownProps) => {
    console.log(ownProps);
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
