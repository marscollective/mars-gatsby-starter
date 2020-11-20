import React from 'react'

const Label = ({ ariaLabel, name }) => (
  <label htmlFor={name} className="sr-only">
    {ariaLabel}
  </label>
)

export const Input = ({ ariaLabel, name, ...props }) => (
  <>
    <Label name={name} ariaLabel={ariaLabel} />
    <input
      className="block border-black border-solid border rounded-none bg-transparent w-full p-2"
      {...props}
    />
  </>
)

export const TextArea = ({ ariaLabel, name, ...props }) => (
  <>
    <Label name={name} ariaLabel={ariaLabel} />
    <textarea
      className="block border-black border-solid border rounded-none bg-transparent w-full h-40 p-2 resize-none"
      {...props}
    />
  </>
)
