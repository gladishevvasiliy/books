import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'

export default () => {
  return (
    <Navbar className="header">
      <Link to={`/`}>
        <Navbar.Brand href="#home">Библиотека</Navbar.Brand>
      </Link>
    </Navbar>
  )
}
