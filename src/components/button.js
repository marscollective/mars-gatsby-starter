import React from 'react'

const Button = ({ children, ...props }) => (
  <button
    className="border-black border-solid border py-2 px-8 hover:bg-black hover:text-white transition-colors duration-300"
    {...props}
  >
    {children}
  </button>
)

export default Button
