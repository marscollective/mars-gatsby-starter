import React, { useEffect, useState } from 'react'
import { Background } from '@components/image'

export const Banner = ({ image, title }) => (
  <Background src={image}>
    <div className="bg-gradient-to-t from-black to-transparent h-full">
      <div className="container my-0">
        <h1 className="text-white text-center m-0 py-64">{title}</h1>
      </div>
    </div>
  </Background>
)

export const Banners = ({ data }) => {
  const [curr, setCurr] = useState(0)
  const { length } = data

  const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1)
  }

  useEffect(() => {
    setTimeout(goToNext, 5000)
    return function () {
      clearTimeout(goToNext)
    }
  })

  return (
    <div className="bg-black">
      {data &&
        data.map(({ image, title }, i) => (
          <div
            className={
              'transition-opacity duration-500 opacity-0 ' +
              (i === curr && 'opacity-100')
            }
            key={title}
          >
            {i === curr && (
              <Background src={image}>
                <div className="bg-gradient-to-t from-black to-transparent h-full">
                  <div className="container my-0">
                    <h1 className="text-white text-center m-0 py-64">
                      {title}
                    </h1>
                  </div>
                </div>
              </Background>
            )}
          </div>
        ))}
    </div>
  )
}
