import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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
          <Redirect from="/" exact to="/books/home/1" />
          {/* Добавлен редирект для помещения на сайт */}
          <Redirect from="/books" exact to="/books/home/1" />
          <Route path="/books/about" component={About} />
          <Route path="/books/book/:id" component={Book} />
          <Route path="/books/home" component={Main} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App
