import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Post from '@components/post'

const BlogPost = ({ data }) => {
  const post = data.post
  const postBody = <div dangerouslySetInnerHTML={{ __html: post.html }} />

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Post
        body={postBody}
        date={post.frontmatter.date}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "en", formatString: "MMMM DD, YYYY")
        # date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1216, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
