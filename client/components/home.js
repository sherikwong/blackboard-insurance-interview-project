import React, { Component } from 'react';
import Header from './header';
import { Characters, InitialLoader } from './index'
import { Row, Col } from 'reactstrap';
import { Alignments } from '../constants';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            loadPercentage: 0,
        };
    }

    componentDidMount() {
        console.log(this.state);
        for (let i = 0; i <= 100; i++) {
            window.setTimeout(() => {
                this.currentLoadPercentage(i);
            }, 30)
        }
    }

    currentLoadPercentage(numLoaded) {
        if (numLoaded === 100) {
            this.setState({
                loaded: true
            });
        } else {
            this.setState({
                loadPercentage: numLoaded
            });
        }
    }

    render() {
        const loadedContent = (
            <div className="full-container">
                <Header />
                <div className="body">
                    <Row>
                        <Col>
                            <Characters alignment={Alignments.Good} />
                        </Col>
                        <Col xs="3" />
                        <Col>
                            <Characters alignment={Alignments.Bad} />
                        </Col>
                    </Row>
                </div>
            </div>
        );

        return (
            <div className="full-container center">
                {this.state.loaded ? loadedContent : <InitialLoader loadPercentage={this.state.loadPercentage} />}
            </div>
        )
    }
}

export default Home;
