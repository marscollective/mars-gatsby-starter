import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Post from '@components/post'

const BlogPost = ({ data }) => {
  const post = data.post
  const {
    excerpt,
    frontmatter: { date, image, title },
    html,
    timeToRead
  } = post
  const body = <div dangerouslySetInnerHTML={{ __html: html }} />

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Post
        body={body}
        date={date}
        image={image}
        title={title}
        timeToRead={timeToRead}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 400)
      frontmatter {
        title
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
