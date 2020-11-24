const settings = require(`./content/settings`)
const {
  title,
  shortTitle,
  description,
  siteUrl,
  favicon,
  lang,
  gtmID,
  socialLinks,
  pwaColors: { backgroundColor, themeColor }
} = settings

module.exports = {
  siteMetadata: {
    title: title,
    description: description,
    siteUrl: siteUrl,
    lang: lang,
    socialLinks: socialLinks
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 80,
              withWebp: true
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: f => `static/${f.hash}/${f.name}`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@assets': 'content/assets',
          '@components': 'src/components',
          '@layout': 'src/components/layout',
          '@seo': 'src/components/seo',
          '@styles': 'src/styles'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: shortTitle,
        start_url: `/`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `fullscreen`,
        icon: `content/settings/${favicon}`,
        icon_options: {
          purpose: `maskable`
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: gtmID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: `gatsby` }
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `Content Manager`,
        htmlFavicon: `content/settings/${favicon}`,
        modulePath: `${__dirname}/src/cms`
      }
    }
  ]
}
