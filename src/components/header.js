import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FiMenu } from 'react-icons/fi'
import logo from '@assets/logo.svg'

const Links = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Blog',
    url: '/blog/'
  },
  {
    label: 'Contact',
    url: '/contact/'
  }
]

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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-200">
      <div className="container my-0 py-8 lg:flex lg:justify-between">
        <div className="flex">
          <button
            className="mr-4 outline-none focus:outline-none lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu size="20px" />
          </button>
          <Link to="/" alt="Home">
            <img src={logo} alt={title} width="72" />
          </Link>
        </div>
        <ul
          className={
            'm-0 mt-6 p-0 list-none space-y-4 lg:inline-flex lg:space-y-0 lg:space-x-6 lg:m-0 ' +
            (menuOpen ? 'block' : 'hidden')
          }
        >
          {Links.map(({ label, url }, i) => (
            <li key={i}>
              <Link to={url} activeClassName="active" alt={label}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
