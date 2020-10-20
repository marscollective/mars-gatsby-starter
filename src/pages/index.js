import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Posts from '@components/posts'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { key: { eq: "blog-post" } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt")
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 384, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const posts = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Posts title="Posts" posts={posts} />
    </Layout>
  )
}

export default IndexPage
