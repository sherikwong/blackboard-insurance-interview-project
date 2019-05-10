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
        this.minimizeLoading = this.minimizeLoading.bind(this);
    }

    componentDidMount() {
    }

    currentLoadPercentage(numLoaded) {
        if (!this.state.loaded) {
            if (numLoaded === 100) {
                this.setState({
                    loaded: true
                });
            } else {
                this.setState({
                    loadPercentage: numLoaded + 1
                });
            }
        }
    }

    minimizeLoading(event) {
        console.log('asofhiasf')
        event.preventDefault();
        setTimeout(() => {
            this.setState({
                loaded: true
            });
        }, 10000)
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
                {this.state.loaded ? loadedContent : <InitialLoader loaded={this.state.loaded} loadPercentage={this.state.loadPercentage} currentLoadPercentage={this.currentLoadPercentage} minimizeLoading={this.minimizeLoading} />}
            </div>
        )
    }
}

export default Home;
