import CMS from 'netlify-cms-app'
import NotFoundPreview from './templates/not-found'
import BlogPostPreview from './templates/blog-post'
import '@styles/tailwind.scss'

CMS.registerPreviewTemplate('not-found', NotFoundPreview)
CMS.registerPreviewTemplate('posts', BlogPostPreview)
