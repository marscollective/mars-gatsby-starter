import React from 'react'
import Form from '@components/form'
import { Background } from '@components/image'

const Contact = ({ image, title }) => (
  <section className="grid md:grid-cols-2 gap-8 container">
    <Background src={image} className="order-last md:order-first" />
    <div className="md:my-12">
      <h2 className="mt-0 mb-8">{title}</h2>
      <Form title="Contact" />
    </div>
  </section>
)

export default Contact
