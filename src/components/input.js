import React from 'react'

const Input = ({ ...props }) => (
  <input
    className="block border-black border-solid border rounded-none bg-transparent w-full p-2"
    {...props}
  />
)

export default Input
