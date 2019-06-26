import React, {Component} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Menu from './Menu'
import Examples from './Examples'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }
  render() {
    return (
      <Router>
          <Route path='/menu' component={Menu} />
          <Route path='/menu' component={Examples} />
      </Router>
    )
  }
}

export default App

