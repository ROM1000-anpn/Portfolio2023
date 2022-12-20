import * as React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPost = ({data, children}) => {
  const image = getImage(data.mdx.frontmatter.main_image)
  return(
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        alt={data.mdx.frontmatter.main_image_alt}
        image={image}
      />
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        date
        main_image_alt
        main_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost