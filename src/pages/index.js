import React from "react"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import LandingPage from "./../components/Home/LandingPage"
import FeaturedProject from "./../components/Home/FeaturedProject"
import ProgrammingSkills from "../components/Home/ProgrammingSkills"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const Home = () => {
  return (
    <Layout>
      <LandingPage />
      <FeaturedProject />
      <ProgrammingSkills />
    </Layout>
  )
}

export default Home
