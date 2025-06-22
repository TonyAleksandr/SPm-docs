import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Вики СПмини",
  description: "Вики СПмини",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'SPworlds',
        items: [
          { text: 'Что такое SPworlds', link: '/SPw' },
          { text: 'СП', link: '/SPw-SP' },
          { text: 'СПм', link: '/SPw-SPm' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
