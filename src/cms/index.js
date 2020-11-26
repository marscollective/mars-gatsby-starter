import { init, registerPreviewTemplate } from 'netlify-cms-app'
import BlogPostPreview from '@templates/blog-post'
import BannersPreview from '@templates/banners'
import ContactPreview from '@templates/contact'
import NotFoundPreview from '@templates/not-found'
import Posts from '@collections/posts'
import Sections from '@collections/sections'
import Settings from '@collections/settings'
import Metadata from '../../content/metadata'
import logo from '@assets/logo.svg'
import '@styles/tailwind.css'

registerPreviewTemplate('posts', BlogPostPreview)
registerPreviewTemplate('banners', BannersPreview)
registerPreviewTemplate('contact', ContactPreview)
registerPreviewTemplate('not-found', NotFoundPreview)

init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'main',
      commit_messages: {
        create: '📝 Create “{{slug}}”',
        update: '📝 Update “{{slug}}”',
        delete: '🔥 Delete “{{slug}}”',
        uploadMedia: '🍱 Upload “{{path}}” [skip ci]',
        deleteMedia: '🔥 Delete “{{path}}” [skip ci]'
      }
    },
    media_folder: 'content/assets',
    public_folder: '/assets',
    locale: Metadata.cmsLang,
    display_url: Metadata.siteUrl,
    logo_url: logo,
    collections: [Posts, Sections, Settings]
  }
})
