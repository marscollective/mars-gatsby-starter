import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Posts = ({ posts, title }) => (
  <section className="container">
    <h2 className="mb-8">{title}</h2>
    <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: { date, image, title }
            }
          },
          i
        ) => (
          <Link to={slug} alt={title} key={i}>
            <div className="bg-muted">
              <Img
                fluid={image?.childImageSharp.fluid}
                alt={title}
                className="h-56"
              />
              <div className="grid gap-2 p-6">
                <h3 className="text-default hover:text-highLight transition-colors duration-500 text-xl m-0">
                  {title}
                </h3>
                <span className="text-highLight text-sm">{date}</span>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  </section>
)

export default Posts
