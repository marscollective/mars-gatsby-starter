import React from 'react'
import { Background } from '@components/image'

const Post = ({ body, date, image, timeToRead, title }) => (
  <article>
    <Background src={image}>
      <div className="bg-gradient-to-t from-black to-transparent">
        <div className="container my-0 py-48 text-center text-white">
          <h1 className="m-0 mb-4">{title}</h1>
          <span className="text-sm">
            {date && `${date} · ${timeToRead} min read`}
          </span>
        </div>
      </div>
    </Background>

    <div className="container">
      <div className="md:mx-16 lg:mx-40">{body}</div>
    </div>
  </article>
)

export default Post
