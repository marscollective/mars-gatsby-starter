import React from 'react'
import Post from '@components/post'

const BlogPostPreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  const { image, title } = data

  return <Post body={widgetFor('body')} image={getAsset(image)} title={title} />
}

export default BlogPostPreview
