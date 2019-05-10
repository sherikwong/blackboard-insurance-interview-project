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
        this.currentLoadPercentage = this.currentLoadPercentage.bind(this);
        this.closeLoadScreen = this.closeLoadScreen.bind(this);
    }

    componentDidMount() {
    }

    currentLoadPercentage(numLoaded) {
        if (!this.state.loaded) {
            if (numLoaded === 100) {
                this.closeLoadScreen();
            } else {
                this.setState({
                    loadPercentage: numLoaded + 1
                });
            }
        }
    }

    closeLoadScreen() {
        this.setState = {
            loaded: true
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
                {this.state.loaded ? loadedContent : <InitialLoader loaded={this.state.loaded} loadPercentage={this.state.loadPercentage} currentLoadPercentage={this.currentLoadPercentage} closeLoadScreen={this.closeLoadScreen}/>}
            </div>
        )
    }
}

export default Home;
