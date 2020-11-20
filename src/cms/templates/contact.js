import React from 'react'
import Contact from '@components/contact'

const ContactPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const { image, title } = data

  return <Contact image={getAsset(image)} title={title} />
}

export default ContactPreview
