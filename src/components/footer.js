import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Social from '@components/social'

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            socialLinks {
              label
              url
            }
          }
        }
      }
    `
  )

  const data = site.siteMetadata
  const { title, socialLinks } = data

  return (
    <footer className="container grid justify-items-center gap-6 text-center">
      <Social socialLinks={socialLinks} />
      <span>
        {new Date().getFullYear()} &copy; {title}
      </span>
    </footer>
  )
}

export default Footer
