const Sections = {
  name: 'sections',
  label: 'Sections',
  media_folder: '',
  public_folder: '',
  sortable_fields: [],
  files: [
    {
      file: 'content/sections/banners/index.md',
      label: 'Banner',
      name: 'banners',
      fields: [
        {
          label: 'key',
          name: 'key',
          widget: 'hidden',
          default: 'banners'
        },
        {
          label: 'Home',
          name: 'bannerHome',
          widget: 'list',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Image', name: 'image', widget: 'image' }
          ]
        }
      ]
    },
    {
      file: 'content/sections/not-found/index.md',
      label: '404',
      name: 'not-found',
      fields: [
        {
          label: 'key',
          name: 'key',
          widget: 'hidden',
          default: 'not-found-page'
        },
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Message', name: 'message', widget: 'string' }
      ]
    }
  ]
}

export default Sections
