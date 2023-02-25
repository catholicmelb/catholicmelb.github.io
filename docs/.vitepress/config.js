import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/'
  
  lang: 'en-US',
  title: 'Parish Handbook',
  description: '',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/changelog' },
    ],

    sidebar: [
      {
          text: 'Control Panel',
          items: [
              { text: 'Example Link One', link: '/entries' },
              { text: 'Example Link Two', link: '/globals' },
          ],
      },
      {
          text: 'Addons',
          items: [
              { text: 'Campaign', link: '/campaign' },
              { text: 'Newsletter Builder', link: '/newsletter-builder' },
          ],
      },
    ],
  },
})
