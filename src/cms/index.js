import CMS from 'netlify-cms-app'
import BlogPostPreview from './templates/blog-post'
import BannersPreview from './templates/banners'
import ContactPreview from './templates/contact'
import NotFoundPreview from './templates/not-found'
import '@styles/tailwind.css'

CMS.registerPreviewTemplate('posts', BlogPostPreview)
CMS.registerPreviewTemplate('banners', BannersPreview)
CMS.registerPreviewTemplate('contact', ContactPreview)
CMS.registerPreviewTemplate('not-found', NotFoundPreview)
