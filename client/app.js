import React, { Component } from 'react'
import { Navbar } from './components'
import Routes from './routes'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchSuperHeroes} from './store/superheroes';
import secrets from '../secrets';
import {SUPERHERO_URL} from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchSuperHeroes();
    console.log(SUPERHERO_URL)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

const mapState = () => {
  return null;
}

const mapDispatch = dispatch => {
  return {
    fetchSuperHeroes: () => dispatch(fetchSuperHeroes())
  }
}

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )
  (App)
  );
