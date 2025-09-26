import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "广告法律法规",
  description: "方便查找广告法律法规",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local"
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '广告法', link: '/广告法' },
      {
        text: "执法指南",
        items: [
          { text: "广告法适用问题执法指南一", link: '/执法指南/广告法适用问题执法指南一' },
          { text: "广告法适用问题执法指南二", link: '/执法指南/广告法适用问题执法指南二' },
          { text: "广告绝对化用语执法指南", link: '/执法指南/广告绝对化用语执法指南' },
          { text: "互联网广告可识别性执法指南", link: '/执法指南/互联网广告可识别性执法指南' },
          { text: "医疗广告监管工作指南", link: '/执法指南/医疗广告监管工作指南' },
          { text: "医疗广告认定指南", link: '/执法指南/医疗广告认定指南' },
          { text: "医疗美容广告执法指南", link: '/执法指南/医疗美容广告执法指南' },
        ]
      },
      {
        text: "法规规章",
        items: [
          { text: "互联网广告管理办法", link: '/法规规章/互联网广告管理办法' },
          { text: "三品一械广告审查管理暂行办法", link: '/法规规章/三品一械广告审查管理暂行办法' },
          { text: "房地产广告发布规定", link: '/法规规章/房地产广告发布规定' },
          { text: "医疗广告管理办法", link: '/法规规章/医疗广告管理办法' },
          { text: "农药广告审查发布规定", link: '/法规规章/农药广告审查发布规定' },
          { text: "兽药广告审查发布规定", link: '/法规规章/兽药广告审查发布规定' },
          { text: "公益广告促进和管理暂行办法", link: '/法规规章/公益广告促进和管理暂行办法' },
          { text: "", link: '/法规规章/' },
        ]
      },
      {
        text: "相关法律法规",
        items: [
          { text: "广告法", link: '/广告法' },
        ]
      },
      
    ],

    sidebar: [
      {
        text: "广告法",
        items: [
          { text: "广告法", link: '/广告法' }
        ]
      },
      {
        text: "执法指南",
        collapsed: false,
        items: [
          { text: "广告法", link: '/广告法' },
        ]
      },
      {
        text: '广告法规规章',
        collapsed: false,
        items: [
          { text: '广告法', link: '/广告法' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
