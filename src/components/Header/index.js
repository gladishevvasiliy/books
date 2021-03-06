import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import './style.css'

library.add(faScroll)

export default () => {
  return (
    <Navbar className="header">
      <Link to={`/`} className="navbar-brand">
        <FontAwesomeIcon icon={faScroll} color="#212121" />
        {'   '}
        Библиотека
      </Link>
      <Nav className="mr-auto">
        <Link className="header-link nav-link" to={`/books/about`}>
          О Нас
        </Link>
      </Nav>
    </Navbar>
  )
}
