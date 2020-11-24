import React from 'react'
import { Banner } from '@components/banners'

const BannerPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const { image, title } = data

  return <Banner image={getAsset(image)} title={title} />
}

export default BannerPreview
