import React from "react"

const Skill = props => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-12">
      <img
        className="mt-5 mb-5 shadow-lg project-square-tech"
        src={props.skillImage}
        alt="A particular software technology or programming language"
      />
    </div>
  )
}

export default Skill
