import React from "react"
import Skill from "./Skill"

const ProgrammingSkills = () => {
  return (
    <div>
      <div class="container home">
        <div class="text-center">
          <h1>Programming Skills</h1>
        </div>
        <div class="home-underline"></div>
        <div class="row text-center">
          <Skill skillImage="/images/JS.PNG" />
          <Skill skillImage="/images/HTML.PNG" />
          <Skill skillImage="/images/CSS.PNG" />
          <Skill skillImage="/images/React.PNG" />
        </div>
        <div class="row text-center">
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
