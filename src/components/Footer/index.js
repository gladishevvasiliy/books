import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faVk, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './style.css'

library.add(faFacebook, faVk, faGlobe)

export default () => {
  return (
    <Navbar className="footer" fixed="bottom">
      <Nav className="mr-auto">
        <Link className="header-link nav-link" to={`books/about`}>
          О Нас
        </Link>
        <Nav.Link href="https://vk.com/kirovold">
          <FontAwesomeIcon icon={faVk} size="lg" color="#78909C" />
        </Nav.Link>
        <Nav.Link href="https://vk.com/kirovold">
          <FontAwesomeIcon icon={faFacebook} size="lg" color="#78909C" />
        </Nav.Link>
        <Nav.Link href="https://vk.com/kirovold">
          <FontAwesomeIcon icon={faGlobe} size="lg" color="#78909C" />
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
