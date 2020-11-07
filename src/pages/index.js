import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Posts from '@components/posts'
import Contact from '@components/contact'

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
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
        contact: markdownRemark(frontmatter: { key: { eq: "contact" } }) {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  const posts = data.posts.edges
  const contact = data.contact.frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <Posts title="Posts" posts={posts} />
      <Contact title={contact.title} image={contact.image} />
    </Layout>
  )
}

export default IndexPage
