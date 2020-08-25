import React from "react"
import Layout from "../components/layout"
import Theme from "../components/theme"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Theme title="Blog">
        <div className="container">
          <ol>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <li>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </Theme>
    </Layout>
  )
}

export default Blog
