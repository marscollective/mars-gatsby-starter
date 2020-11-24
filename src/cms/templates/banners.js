import React from 'react'
import { Banner } from '@components/banners'

const BannersPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const { bannerHome, bannerBlog, bannerContact } = data

  return (
    <>
      <h2>Home</h2>
      {bannerHome.map(({ image, title }, i) => (
        <Banner image={getAsset(image)} title={title} key={i} />
      ))}

      <h2>Blog</h2>
      {bannerBlog.map(({ image, title }, i) => (
        <Banner image={getAsset(image)} title={title} key={i} />
      ))}

      <h2>Contact</h2>
      {bannerContact.map(({ image, title }, i) => (
        <Banner image={getAsset(image)} title={title} key={i} />
      ))}
    </>
  )
}

export default BannersPreview
