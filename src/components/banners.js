import React from 'react'
import { Background } from '@components/image'

export const Banner = ({ image, title }) => (
  <Background src={image}>
    <div className="bg-gradient-to-t from-black to-transparent h-full">
      <div className="container my-0">
        <h1 className="text-white text-center m-0 py-64">{title}</h1>
      </div>
    </div>
  </Background>
)

export const Banners = ({ banners }) => (
  <>
    {banners.map(({ node: { frontmatter: { image, title } } }, i) => (
      <Banner image={image} title={title} key={i} />
    ))}
  </>
)
