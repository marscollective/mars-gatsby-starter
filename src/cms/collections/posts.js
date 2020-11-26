const Posts = {
  name: 'posts',
  label: 'Posts',
  label_singular: 'post',
  folder: 'content/blog',
  create: true,
  media_folder: '',
  public_folder: '',
  sortable_fields: ['title', 'date'],
  path: '{{slug}}/index',
  fields: [
    { label: 'key', name: 'key', widget: 'hidden', default: 'blog-post' },
    { label: 'Title', name: 'title', widget: 'string' },
    {
      label: 'Date',
      name: 'date',
      widget: 'datetime',
      format: 'YYYY-MM-DD HH:mm:ss'
    },
    { label: 'Image', name: 'image', widget: 'image' },
    { label: 'Body', name: 'body', widget: 'markdown' }
  ]
}

export default Posts
