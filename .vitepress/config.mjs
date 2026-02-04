import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress';


// 中文按字分词函数
function chineseTokenizer(text){
  // 移除标点/空格，保留中文、字母、数字，按字拆分
  return text
    .replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '') // 过滤非中日韩汉字/字母/数字
    .split('') // 按字拆分
    .filter((char) => char.trim() !== ''); // 过滤空字符
}

// https://vitepress.dev/reference/site-config
export default withPwa( defineConfig({
  title: "广告法律法规",
  description: "方便查找广告法律法规",
  // 👇 新增HTTPS核心配置
  // vite:{
  //   server: {
  //   https: true, // 开启HTTPS，自动生成自签名证书
  //   open: true,  // 可选：启动后自动打开浏览器
  //   port: 5174   // 可选：自定义端口
  // },
// },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    //   options: {
    //   // 禁用 MiniSearch 默认的分词器
    //   tokenize: false,
    //   // 自定义索引构建时的分词（处理文档内容）
    //   extractField: (document) => {
    //     // 合并标题、内容等字段，统一分词
    //     const fullText = [document.title, document.content].join(' ');
    //     return chineseTokenizer(fullText);
    //   },
    //   // 自定义搜索查询时的分词（处理用户输入）
    //   searchOptions: {
    //     tokenize: (query) => chineseTokenizer(query),
    //   },
    //   // 其他 MiniSearch 配置
    //   fields: ['title', 'content'], // 索引字段
    //   storeFields: ['title', 'href'], // 存储字段
    //   boost: { title: 2 }, // 标题权重更高
    // },
  },
    outline:[2,5],
    nav: [
      { text: '首页', link: '/' },
      {
        text: '法律',
        items: [
          { text: '广告法', link: '/法律/广告法' },
          { text: '中华人民共和国行政处罚法', link: '/法律/中华人民共和国行政处罚法' },
          { text: '中华人民共和国行政复议法', link: '/法律/中华人民共和国行政复议法' },
          { text: '中华人民共和国行政强制法', link: '/法律/中华人民共和国行政强制法' },
          { text: '中华人民共和国行政许可法', link: '/法律/中华人民共和国行政许可法' },
          { text: '中华人民共和国反不正当竞争法', link: '/法律/中华人民共和国反不正当竞争法' },
          { text: '中华人民共和国消费者权益保护法', link: '/法律/中华人民共和国消费者权益保护法' },
        ]
      },
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
          { text: "直播电商监督管理办法", link: '/法规规章/直播电商监督管理办法' },
          { text: "", link: '/法规规章/' },
        ]
      },
      {
        text: "政策文件",
        items:[
          { text: "市场监督管理行政处罚程序规定 ", link: '/政策文件/市场监督管理行政处罚程序规定' },
          { text: "最高人民法院关于审理商品房买卖合同纠纷案件适用法律若干问题的解释 ", link: '/政策文件/最高人民法院关于审理商品房买卖合同纠纷案件适用法律若干问题的解释 ' },
        ]
      },
      {
        text: "广告法释义",
        items: [
          { text: "法工委版", link: '/广告法释义/法工委版' },
          {text: "总局版", link: '/广告法释义/总局版'},
          {text: "案例注释版", link: '/广告法释义/案例注释版'},
          {text: "广告监管执法实务与案例", link: '/广告法释义/广告监管执法实务与案例'},
          {text: "互联网广告法律实务", link: '/广告法释义/互联网广告法律实务'},
        ]
      }

    ],

    sidebar: {
      '/法律/':
      {
        text: '法律',
        items: [
          { text: '广告法', link: '/法律/广告法' },
          { text: '中华人民共和国行政处罚法', link: '/法律/中华人民共和国行政处罚法' },
          { text: '中华人民共和国行政复议法', link: '/法律/中华人民共和国行政复议法' },
          { text: '中华人民共和国行政强制法', link: '/法律/中华人民共和国行政强制法' },
          { text: '中华人民共和国行政许可法', link: '/法律/中华人民共和国行政许可法' },
          { text: '中华人民共和国反不正当竞争法', link: '/法律/中华人民共和国反不正当竞争法' },
          { text: '中华人民共和国消费者权益保护法', link: '/法律/中华人民共和国消费者权益保护法' },
        ]
      },
      '/法规规章/': {
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
      '/执法指南/': {
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
      '/政策文件/': {
        text: "政策文件",
        items:[
          { text: "市场监督管理行政处罚程序规定 ", link: '/政策文件/市场监督管理行政处罚程序规定' },
          { text: "保健目录 ", link: '/政策文件/保健目录' },
          { text: "最高人民法院关于审理商品房买卖合同纠纷案件适用法律若干问题的解释 ", link: '/政策文件/最高人民法院关于审理商品房买卖合同纠纷案件适用法律若干问题的解释 ' },
        ]
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  // PWA 配置
  pwa: {
    mode: 'development',
    registerType: 'autoUpdate',
    injectRegister: 'script-defer',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: '广告法律法规',
      short_name: '广告法律法规',
      theme_color: '#ffffff',
      icons: [
        {
          src: '广告128.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '广告512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '广告512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      // 这个配置默认是 2M，如果网站文件很多，打包的文件大小若超过这个值，build 会失败，可以根据自己需要调整
      // maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
    },
    experimental: {
      includeAllowlist: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
    },
  },
})
)