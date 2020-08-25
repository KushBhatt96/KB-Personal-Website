import React from "react"

const AboutCard = props => {
  return (
    <div className="container-fluid inner-mid mb-5" id="about">
      <div className="text-center">
        <h1>{props.title}</h1>
      </div>
      <div className="row post-design shadow">
        <div className="col-xl-3 col-lg-4 about-color1 text-center">
          <img className="mt-5 mb-5 shadow-lg" src={props.image} />
        </div>
        <div className="col-xl-9 col-lg-8 bg-light p-5">
          <h4>{props.innerTitle}</h4>
          <p className="about-p2">{props.date}</p>
          <p className="about-p1">{props.description}</p>
          <h4>{props.innerTitle2}</h4>
          <p className="about-p2">{props.date2}</p>
          <p className="about-p1">{props.description2}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
