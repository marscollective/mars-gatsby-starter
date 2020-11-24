import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import { Banners } from '@components/banners'
import Posts from '@components/posts'
import Contact from '@components/contact'

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        banners: markdownRemark(frontmatter: { key: { eq: "banners" } }) {
          frontmatter {
            bannerHome {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
        posts: allMarkdownRemark(
          filter: { frontmatter: { key: { eq: "blog-post" } } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 3
        ) {
          edges {
            node {
              frontmatter {
                date(locale: "en", formatString: "MMMM DD, YYYY")
                # date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 590, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              fields {
                slug
              }
              timeToRead
            }
          }
        }
        contact: markdownRemark(frontmatter: { key: { eq: "contact" } }) {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 720, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const banners = data.banners.frontmatter.bannerHome
  const posts = data.posts.edges
  const contact = data.contact.frontmatter
  const { image, title } = contact

  return (
    <Layout>
      <SEO title="Home" />
      <Banners data={banners} />
      <Posts title="Blog" posts={posts} more />
      <Contact title={title} image={image} />
    </Layout>
  )
}

export default IndexPage
