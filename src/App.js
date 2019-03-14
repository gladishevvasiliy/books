import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Book from './pages/Book'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
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
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App
