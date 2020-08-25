import React from "react"
import { Link } from "gatsby"

const FeaturedProject = () => {
  return (
    <div>
      <div className="container home">
        <div className="text-center">
          <h1>Featured Project</h1>
        </div>
        <div className="home-underline"></div>
        <div className="row">
          <div className="col-xl-7 col-lg-12 text-center">
            <img
              className="mt-5 mb-5 shadow-lg project-square-no-border"
              src="/images/Reactify_img1.PNG"
              alt="Screenshot of the Reactify Web Application Project by Kush Bhatt"
            />
          </div>
          <div className="col-xl-5 col-lg-12">
            <h2>Reactify</h2>
            <p>
              Reactify is a social networking web application that allows users
              to host and attend different events and activities.
            </p>
            <Link className="btn btn-info btn-lg mt-4" to="/projects">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject
