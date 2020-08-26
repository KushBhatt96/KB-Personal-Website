import React from "react"
import Layout from "./../components/layout"
import { Link } from "gatsby"
import Theme from "./../components/theme"

const NotFound = () => {
  return (
    <Layout>
      <Theme title="Page not found">
        <h1 className="text-center">
          <Link to="/">Go to home page</Link>
        </h1>
      </Theme>
    </Layout>
  )
}

export default NotFound
