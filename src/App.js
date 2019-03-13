import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Book from './pages/Book'
// import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:id" component={Book} />
      </Switch>
    )
  }
}

export default App
