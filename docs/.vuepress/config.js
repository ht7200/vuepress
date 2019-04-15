module.exports = {
  title: 'GFE-DOC',
  description: 'Great Front-End Documents',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      { text: '主页', link: '/' }, // 导航条
      { text: '项目管理', link: '/projectComponents/' },
      { text: '知识库', link: '/knowledgeComponents/' },
      { text: '前端周报', link: '/reportComponents/' }, // 内部链接 以docs为根目录
      { text: '代码仓库', link: 'http://10.10.10.45:8000/nose'}, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/ht7200/vuepress' },
        ]
      }        
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/projectComponents/': [
        {
          title: 'CRM',
          collapsable: false,
          children: [
            'CRM/v1',
            'CRM/v2',
            'CRM/v3',
            'CRM/v4',
          ]
        },
        {
          title: '小程序',
          collapsable: true,
          children: [
            'weChat/zxhx'
          ]
        },
        {
          title: '官网',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '还有谁？',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/knowledgeComponents/': [
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
            'JS/base',
            'JS/es6'
          ]
        },
        {
          title: 'CSS知识库',
          collapsable: true,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: true,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: true,
          children: [
            'VUE/vue'
          ]
        },
        {
          title: '浏览器',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '性能',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '安全',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/reportComponents/': [
        {
          title: '三月',
          collapsable: false,
          children: [
            '3March/W4'
          ]
        },
        {
          title: '四月',
          collapsable: false,
          children: [
            '4April/W1',
            '4April/W2',
            '4April/W3',
            '4April/W4',
          ]
        },
        {
          title: '五月',
          collapsable: false,
          children: [
          ]
        },
        {
          title: '六月',
          collapsable: false,
          children: [
          ]
        }
      ]
    }
  }
}