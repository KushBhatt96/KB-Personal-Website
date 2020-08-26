import React from "react"
import Layout from "../components/layout"
import Theme from "../components/theme"
import { graphql, useStaticQuery } from "gatsby"
import BlogCard from "./../components/Blog/BlogCard"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              description
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Theme title="Blog">
        <div className="inner-mid">
          <div className="text-center mb-5">
            <h1 className="blog-h1">Recent Posts</h1>
          </div>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <div className="mb-5" key={edge.node.frontmatter.title}>
                <BlogCard
                  title={edge.node.frontmatter.title}
                  date={edge.node.frontmatter.date}
                  description={edge.node.frontmatter.description}
                  link={`/blog/${edge.node.fields.slug}`}
                />
              </div>
            )
          })}
        </div>
      </Theme>
    </Layout>
  )
}

export default Blog
