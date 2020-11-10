import React from 'react'

const TextArea = ({ ...props }) => (
  <textarea
    className="block border-black border-solid border rounded-none bg-transparent w-full h-40 p-2 resize-none"
    {...props}
  />
)

export default TextArea