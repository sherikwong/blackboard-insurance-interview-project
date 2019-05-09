import React from 'react';
import Header from './header';
import { Characters } from './index'
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <span>
                    Hello
                </span>
            </Container>
            <Characters />
        </div>
    )
}

export default Home;
