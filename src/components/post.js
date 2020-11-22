import React from 'react'
import { Background } from '@components/image'

const Post = ({ body, date, image, timeToRead, title }) => (
  <div className="container">
    <Background src={image} className="mb-16">
      <div className="grip gap-4 px-4 py-48 text-center text-white bg-gradient-to-t from-black to-transparent">
        <span className="text-sm">
          {date && `${date} - ${timeToRead} minutes of reading`}
        </span>
        <h1 className="m-0">{title}</h1>
      </div>
    </Background>

    <div className="md:mx-16 lg:mx-40">{body}</div>
  </div>
)

export default Post
