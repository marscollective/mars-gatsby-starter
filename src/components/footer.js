import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Social from '@components/social'
import { AiTwotoneHeart } from 'react-icons/ai'

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              label
              url
            }
          }
        }
      }
    `
  )

  const socialLinks = site.siteMetadata.socialLinks

  return (
    <footer className="container grid justify-items-center gap-4">
      <Social socialLinks={socialLinks} />
      <span className="text-center">
        Made with <AiTwotoneHeart className="inline mb-1 text-highLight" /> and{' '}
        <a
          href="https://gatsbyjs.org"
          alt="Gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        <br />
        by{' '}
        <a
          href="https://marscollective.co"
          alt="Mars Collective"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mars Collective
        </a>
      </span>
    </footer>
  )
}

export default Footer
