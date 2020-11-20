import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

export const Image = ({ alt, className, src }) =>
  !!src.childImageSharp ? (
    <Img fluid={src.childImageSharp.fluid} alt={alt} className={className} />
  ) : (
    <div className={`${className} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className="object-cover object-center w-full h-full"
      />
    </div>
  )

export const Background = ({ className, children, src }) =>
  !!src.childImageSharp ? (
    <BackgroundImage
      fluid={src.childImageSharp.fluid}
      className={`${className} min-h-64 md:h-full`}
    >
      {children}
    </BackgroundImage>
  ) : (
    <div
      className={`${className} bg-cover bg-center min-h-64 md:h-full`}
      style={{
        backgroundImage: `url(${src})`
      }}
    >
      {children}
    </div>
  )
