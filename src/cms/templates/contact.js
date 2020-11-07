import React from 'react'
import Contact from '@components/contact'

const ContactPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  return <Contact image={getAsset(data.image)} title={data.title} />
}

export default ContactPreview
