import React from "react"

const Skill = (props) => {
  return (
    <div class="col-xl-3 col-lg-6 col-md-12">
      <img
        class="mt-5 mb-5 shadow-lg project-square-tech"
        src={props.skillImage}
      />
    </div>
  )
}

export default Skill
