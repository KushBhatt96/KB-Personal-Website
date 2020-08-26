import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.css"
import Head from "./../components/head"

const Layout = props => {
  return (
    <div>
      <Head />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
