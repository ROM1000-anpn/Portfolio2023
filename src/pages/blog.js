import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
  return(
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.name}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            {node.body}
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        body
        frontmatter {
          date
          name
        }
        id
      }
    }
  }
`

export default BlogPage
