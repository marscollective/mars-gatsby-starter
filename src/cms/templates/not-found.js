import React from 'react'
import NotFound from '@components/not-found'

const NotFoundPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const { message, title } = data

  return <NotFound message={message} title={title} />
}

export default NotFoundPreview
