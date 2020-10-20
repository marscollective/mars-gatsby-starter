import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import logo from '@assets/logo.svg'

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const title = site.siteMetadata.title

  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" alt="Home">
            <img src={logo} alt={title} width="160" height="44" />
          </Link>

          <div className="flex space-x-8">
            <Link
              to="/"
              alt="Home"
              activeClassName="active"
              className="text-default hover:text-highLight"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
