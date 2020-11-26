const Settings = {
  name: 'settings',
  label: 'Settings',
  media_folder: '',
  public_folder: '',
  sortable_fields: [],
  editor: { preview: false },
  files: [
    {
      file: 'README.md',
      label: 'README',
      name: 'readme',
      fields: [{ label: 'Body', name: 'body', widget: 'markdown' }]
    },
    {
      file: 'content/metadata/metadata.json',
      label: 'Metadata',
      name: 'siteMetadata',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Short Title', name: 'shortTitle', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text' },
        { label: 'Site URL', name: 'siteUrl', widget: 'string' },
        { label: 'Favicon', name: 'favicon', widget: 'image' },
        {
          label: 'PWA Colors',
          name: 'pwaColors',
          widget: 'object',
          fields: [
            {
              label: 'Background Color',
              name: 'backgroundColor',
              widget: 'color'
            },
            { label: 'Theme Color', name: 'themeColor', widget: 'color' }
          ]
        },
        { label: 'Lang', name: 'lang', widget: 'string' },
        {
          label: 'CMS Lang',
          name: 'cmsLang',
          widget: 'select',
          options: ['en', 'es', 'pt']
        },
        { label: 'GTM ID', name: 'gtmID', widget: 'string' },
        {
          label: 'Social Links',
          label_singular: 'profile',
          name: 'socialLinks',
          widget: 'list',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'select',
              options: [
                'Email',
                'Facebook',
                'Instagram',
                'Messenger',
                'Twitter',
                'WhatsApp'
              ]
            },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        }
      ]
    }
  ]
}

export default Settings
