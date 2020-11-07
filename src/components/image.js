import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

export const Image = ({ alt, className, image }) =>
  !!image?.childImageSharp ? (
    <Img fluid={image.childImageSharp.fluid} alt={alt} className={className} />
  ) : (
    <div className={`${className} overflow-hidden`}>
      <img
        src={image}
        alt={alt}
        className="object-cover object-center w-full h-full"
      />
    </div>
  )

export const Background = ({ className, children, image }) =>
  !!image?.childImageSharp ? (
    <BackgroundImage fluid={image.childImageSharp.fluid} className={className}>
      {children}
    </BackgroundImage>
  ) : (
    <div
      className={`${className} bg-cover bg-center`}
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      {children}
    </div>
  )
