import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Contact from '@components/contact'

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
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

  const contact = data.contact.frontmatter
  const { image, title } = contact

  return (
    <Layout>
      <SEO title="Home" />
      <Contact title={title} image={image} />
    </Layout>
  )
}

export default ContactPage
