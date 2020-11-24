import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import { Banners } from '@components/banners'
import Contact from '@components/contact'

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        banners: allMarkdownRemark(
          filter: { frontmatter: { key: { eq: "Contact" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        contact: markdownRemark(frontmatter: { key: { eq: "contact" } }) {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 720, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  const banners = data.banners.edges
  const contact = data.contact.frontmatter
  const { image, title } = contact

  return (
    <Layout>
      <SEO title="Home" />
      <Banners banners={banners} />
      <Contact title={title} image={image} />
    </Layout>
  )
}

export default ContactPage
