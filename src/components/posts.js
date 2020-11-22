import React from 'react'
import { Link } from 'gatsby'
import { Background } from '@components/image'

const Posts = ({ posts, title }) => (
  <section className="container">
    <h2 className="mb-8">{title}</h2>
    <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: { date, image, title },
              timeToRead
            }
          },
          i
        ) => (
          <Link
            to={slug}
            alt={title}
            className="text-white hover:text-blue-300"
            key={i}
          >
            <Background src={image} alt={title} className="h-96">
              <div className="bg-gradient-to-t from-black to-transparent h-full">
                <div className="absolute bottom-0 grid gap-2 p-10">
                  <span className="text-sm">
                    {date} - {timeToRead} minutes of reading
                  </span>
                  <h3 className="text-xl m-0">{title}</h3>
                </div>
              </div>
            </Background>
          </Link>
        )
      )}
    </div>
  </section>
)

export default Posts
