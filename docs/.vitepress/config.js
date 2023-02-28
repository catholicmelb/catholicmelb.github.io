import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Parish Handbook Demo',
  description: 'Advice for Parishes',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/changelog' },
    ],

    algolia: {
      appId: '',
      apiKey: '',
      indexName: 'vitepress'
    },


    sidebar: [
      { 
          text: 'Contents',
          items: [
              { text: '1. Overview', link: '/1-overview.md' },
              { text: '2. Principles of Parish Administration', link: '/2-principles-of-parish-administration.md' },
          ],
      },

      // { 
      //     text: 'Guide',
      //     items: [
      //         { text: 'Example 1', link: '/guide/example-01.md' },
      //         { text: 'Example 2', link: '/guide/example-02.md' },
      //         { text: 'Example 3', link: '/guide/example-03.md' },
      //     ],
      // },

      { 
          text: '1. Overview',
          items: [
              { text: '1.1 Aim', link: '/aim' },
              { text: '1.2 Church & Civil Law', link: '/law' },
          ],
      },

      { 
          text: '2. Principles of Parish Administration',
          items: [
              { text: '2.1 General Principles', link: '/general-principles' },
              { text: '2.2. Acts of Parish Administration', link: '/acts-of-parish-administration' },
          ],
      },
    ],
  }
})