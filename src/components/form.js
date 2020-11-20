import React from 'react'
import { Input, TextArea } from '@components/input'
import Button from '@components/button'

const Form = () => (
  <form className="space-y-4">
    <Input
      type="text"
      id="name"
      name="name"
      ariaLabel="Name"
      placeholder="Name"
      required
    />
    <Input
      type="text"
      id="subject"
      name="subject"
      ariaLabel="Subject"
      placeholder="Subject"
      required
    />
    <Input
      type="email"
      id="email"
      name="email"
      ariaLabel="Email"
      placeholder="Email"
      required
    />
    <TextArea
      id="message"
      name="message"
      ariaLabel="Message"
      placeholder="Message"
      required
    />
    <Button type="submit">Send</Button>
  </form>
)

export default Form
