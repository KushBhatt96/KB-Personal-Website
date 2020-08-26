import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-dark shadow"
      >
        <ul className="navbar-nav">
          <li className="navbar-item navbar-brand">
            <Link className="nav-link" to="/">
              KB
            </Link>
          </li>
        </ul>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link  mr-5" to="/">
              HOME
            </Link>
            <Link className="nav-link  mr-5" to="/about">
              ABOUT
            </Link>
            <Link className="nav-link  mr-5" to="/projects">
              PROJECTS
            </Link>
            <Link className="nav-link  mr-5" to="/blog">
              BLOG
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
