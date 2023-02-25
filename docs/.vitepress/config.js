import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Parish Handbook',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/changelog' },
    ],

    sidebar: [
      {
          text: 'Introduction',
          items: [
              { text: 'Example Link One', link: '/example-01' },
              { text: 'Example Link Two', link: '/example-markdown' },
          ],
      },
      {
          text: 'Section Name',
          items: [
              { text: 'Example Link Three', link: '/example-03' },
          ],
      },
    ],
  },
})
