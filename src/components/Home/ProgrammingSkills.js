import React from "react"
import Skill from "./Skill"

const ProgrammingSkills = () => {
  return (
    <div>
      <div className="container home">
        <div className="text-center">
          <h1>Programming Skills</h1>
        </div>
        <div className="home-underline"></div>
        <div className="row text-center">
          <Skill skillImage="/images/JS.PNG" />
          <Skill skillImage="/images/HTML.PNG" />
          <Skill skillImage="/images/CSS.PNG" />
          <Skill skillImage="/images/React.PNG" />
        </div>
        <div className="row text-center mb-5">
          <Skill skillImage="/images/JAVA.JPG" />
          <Skill skillImage="/images/CSharp.PNG" />
          <Skill skillImage="/images/Python.PNG" />
          <Skill skillImage="/images/postgres.PNG" />
        </div>
      </div>
    </div>
  )
}

export default ProgrammingSkills
