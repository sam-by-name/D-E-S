import React, {Component} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Menu from './Menu'

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
      </Router>
    )
  }
}

export default App

