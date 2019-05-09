import React from 'react';
import Header from './header';
import { Characters } from './index'
import { Row, Col } from 'reactstrap';
import {Alignments} from '../constants';

const Home = () => {
    return (
        <div>
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
    )
}

export default Home;
