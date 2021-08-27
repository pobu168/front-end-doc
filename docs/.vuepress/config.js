module.exports = {
  theme: '',
  title: 'front-end-doc',
  description: '',
  base: '/',
  port: '8080',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: {
      '/comps/': [
        '/comps/test.md'
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}