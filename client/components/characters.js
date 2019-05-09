import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Character } from './index'

// eslint-disable-next-line react/prefer-stateless-function
class Characters extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <div className="alignment-header">
                        <img className={this.props.alignment} />
                    </div>

                    {Array.from(Array(3), (e, i) => {
                        return <Row key={i}>
                            {Array.from(Array(3), (e, j) => {
                                return <Col key={j}><Character/></Col>
                            })}
                        </Row>
                    })}
                </CardBody>
            </Card>
        )
    }
}

const mapState = () => {
    return null;
}

const mapDispatch = dispatch => {
    return {
        // fetchBiographyById: id => dispatch(fetchBiographyById(id))
    }
}

export default withRouter(
    connect(
        mapState,
        mapDispatch
    )(Characters)
);
