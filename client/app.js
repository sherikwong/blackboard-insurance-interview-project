import React from 'react'
// import Routes from './routes'
import '../public/style.scss';
import { Home, Admin } from './components/index'

const App = () => {
  return (
    <div className="full-container center">
      {/* <Admin /> */}
      <Home />
      {/* <Routes /> */}
    </div>
  )
}

export default App;
