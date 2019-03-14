import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Book from './pages/Book'
import Header from './components/Header'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faLongArrowAltLeft)

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/book/:id" component={Book} />
        </Switch>
      </>
    )
  }
}

export default App
