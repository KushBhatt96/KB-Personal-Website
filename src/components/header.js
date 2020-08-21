import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top shadow">
        <ul className="navbar-nav">
          <li className="navbar-item navbar-brand">
            <Link className="nav-link" to="/">
              KB
            </Link>
          </li>
        </ul>
        <button
        className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link  mr-5" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mr-5" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mr-5" to="/projects">
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mr-5" to="/blog">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
