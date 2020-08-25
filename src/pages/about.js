import React from "react"
import Layout from "../components/layout"
import AboutCard from "./../components/About/AboutCard"
import Theme from "../components/theme"

const About = () => {
  return (
    <Layout>
      <Theme title="About Me">
        <AboutCard
          title="Introduction"
          image="images/ProfileFinal2Cropped.jpg"
          description="Hello! My name is Kush Bhatt and I am a Software Engineering Masters
        Student at the University of Calgary. I am passionate about software
        development and big data analytics. I have demonstrated this through
        various projects which can be found in the projects section. In
        addition to the software engineering fundamentals I've acquired in
        my program, I've also taken several courses online to learn some of
        the modern frameworks such as React and ASP.NET Core. I am eager to
        learn and always finding ways to expand my knowledge."
        />
        <AboutCard
          title="Education"
          image="images/Books.png"
          innerTitle="MEng in Software Engineering | University of Calgary"
          date="2019 - 2020"
          description="Courses: Principles of Software Development,
        Software Design and Architecture, Data Engineering, Large-Scale Data
        Analytics Systems, Machine Learning, Deep Learning, Databases, Requirements
        Analysis, Software Testing and Reliability, Capstone"
          innerTitle2="BSc in Chemical Engineering | University of Calgary"
          date2="2014 - 2019"
          description2="Graduated with Internship & Distinction"
        />
      </Theme>
    </Layout>
  )
}

export default About
