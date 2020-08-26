import React from "react"
import { Link } from "gatsby"

const BlogCard = props => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row post-design shadow">
          <div className="col-xl-3 col-lg-5 about-color1 text-center">
            <h1 className="mt-3">{props.title}</h1>
            <h5>{props.date}</h5>
          </div>
          <div className="col-xl-9 col-lg-7 bg-light p-4">
            <h5>
              {props.description} <Link to={props.link}> ... Read More</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
