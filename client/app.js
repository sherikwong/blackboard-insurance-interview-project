import React, { Component } from 'react'
import { Navbar } from './components'
import Routes from './routes'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchSuperHeroById} from './store/superheroes';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchSuperHeroById(2);
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
    fetchSuperHeroById: id => dispatch(fetchSuperHeroById(id))
  }
}

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )
  (App)
  );
