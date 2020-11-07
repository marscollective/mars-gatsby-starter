import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Form from '@components/form'
import { Background } from '@components/image'

const Contact = ({ title }) => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "assets/contact.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <section className="grid md:grid-cols-2 gap-8 container">
      <Background image={file} className="order-last md:order-first" />
      <div className="md:my-12">
        <h2 className="mt-0 mb-8">{title}</h2>
        <Form title="Contact" />
      </div>
    </section>
  )
}

export default Contact
