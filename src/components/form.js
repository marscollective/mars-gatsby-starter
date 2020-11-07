import React from 'react'
import Input from '@components/input'
import TextArea from '@components/text-area'
import Button from '@components/button'

const Form = () => (
  <form className="space-y-4">
    <Input
      type="text"
      name="name"
      ariaLabel="Name"
      placeholder="Name"
      required
    />
    <Input
      type="text"
      name="subject"
      ariaLabel="Subject"
      placeholder="Subject"
      required
    />
    <Input
      type="email"
      name="email"
      ariaLabel="Email"
      placeholder="Email"
      required
    />
    <TextArea
      name="message"
      ariaLabel="Message"
      placeholder="Message"
      required
    />
    <Button type="submit">Send</Button>
  </form>
)

export default Form
