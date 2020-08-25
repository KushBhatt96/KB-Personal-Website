import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const LandingPage = () => {
  return (
    <div>
      <div className="landing">
        <div className="home-wrap">
          <div className="home-inner"></div>
        </div>
      </div>
      <div className="caption center-block text-center">
        <h3>Hi, I'm Kush.</h3>
        <p>
          Software Engineering Masters student at the University of Calgary
          <br />
          with a passion for software development and data science.
          <br />
          Connect with me on LinkedIn or check out my GITHUB profile using the
          icons below!
        </p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/kush-bhatt/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/KushBhatt96">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <Link className="btn btn-outline-light" to="/about">
          About Me
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
