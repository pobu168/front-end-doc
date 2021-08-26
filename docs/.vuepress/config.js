module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        // path: '/pages/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/pages/b',
          '/pages/a'
        ]
      },
      // '/pages/b'
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'pages'
      }
    }
  },
  base: '/front-end-doc/',
  markdown: {
    lineNumbers: true
  }
}