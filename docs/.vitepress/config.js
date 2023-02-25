import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Parish Handbook',
  description: 'Advice for Parishes',
  appearance: 'dark',
  lastUpdated: true,
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
              { text: 'Example Link Two', link: '/example-02' },
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
  MarkdownOption: {
    markdown: {
      lineNumbers: true
    }
  }
})