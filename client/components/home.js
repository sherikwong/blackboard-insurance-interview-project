import React, { Component } from 'react';
import Header from './header';
import { Characters, InitialLoader } from './index'
import { Row, Col } from 'reactstrap';
import { Alignments } from '../constants';
import axios from 'axios';
// import run from '../../server/api/superheroes'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loaded: true,
            loadPercentage: 0,
        };
    }

    componentDidMount() {
        if (this.state.loadPercentage <= 100 && !this.state.loaded) {
            setInterval(() => {
                this.currentLoadPercentage(this.state.loadPercentage);
            }, 10);
        }
        axios.post('/api/superheroes').then(res => console.log(res.data));
    }

    currentLoadPercentage(numLoaded) {
        console.log(numLoaded);
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
