import React from "react"
import Layout from "./../components/layout"
import Theme from "../components/theme"
import { graphql, Link } from "gatsby"
import purify from "dompurify"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
      }
      html
      timeToRead
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <Theme title="Blog ">
        <div className="container mt-5">
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>
            Posted by {props.data.markdownRemark.frontmatter.author} on{" "}
            {props.data.markdownRemark.frontmatter.date}
          </p>
          <div className="blog-card mb-5">
            <div
              dangerouslySetInnerHTML={{
                __html: purify.sanitize(props.data.markdownRemark.html),
              }}
            ></div>
            <Link className="btn btn-info mt-3" to="/blog">
              Return
            </Link>
          </div>
        </div>
      </Theme>
    </Layout>
  )
}

export default Blog
