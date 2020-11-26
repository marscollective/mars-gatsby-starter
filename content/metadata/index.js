const metadata = require('./metadata.json')

const Metadata = {
  title: metadata.title,
  shortTitle: metadata.shortTitle,
  description: metadata.description,
  siteUrl: metadata.siteUrl,
  favicon: metadata.favicon,
  pwaColors: metadata.pwaColors,
  lang: metadata.lang,
  cmsLang: metadata.cmsLang,
  gtmID: metadata.gtmID,
  socialLinks: metadata.socialLinks
}

module.exports = Metadata
