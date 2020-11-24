import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Posts from '@components/posts'

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
          filter: { frontmatter: { key: { eq: "blog-post" } } }
          sort: { fields: frontmatter___date, order: DESC }
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
                      ...GatsbyImageSharpFluid_withWebp
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
      }
    `
  )

  const posts = data.posts.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Posts title="Blog" posts={posts} />
    </Layout>
  )
}

export default BlogPage
