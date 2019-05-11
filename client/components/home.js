import React, { Component } from 'react';
import Header from './header';
import { Characters, InitialLoader } from './index'
import { Row, Col } from 'reactstrap';
import { Alignments } from '../constants';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loaded: true,
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
                    <Row className="justify-content-between h-100">
                        <Col className="col-1 col-sm-1 col-md-1" />
                        <Col className="col-10 col-sm-4 col-md-4  h-100">
                            <Characters alignment={Alignments.Good} />
                        </Col>
                        <Col className="col-0 col-sm-2 col-md-2"/>
                        <Col className="col-10 col-sm-4 col-md-4  h-100">
                            <Characters alignment={Alignments.Bad} />
                        </Col>
                        <Col className="col-1 col-sm-1 col-md-1" />
                    </Row>
                </div>
                <div className="footer"/>
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
