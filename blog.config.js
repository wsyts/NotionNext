const BLOG = {
  // Notion 页面 ID，重要！请确保是数据库页面的 ID
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',

  // 博客主题名称，可选值见 themes 文件夹，例如：fukasawa, hexo, matery 等
  THEME: process.env.NEXT_PUBLIC_THEME || 'fukasawa', // 博客主题设置为 fukasawa

  // 网站语言
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // 支持 'zh-CN' 或 'en-US'

  // 博客上线年份，默认为当前年份
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025, // 博客创建年份

  // 是否开启伪静态路径（.html 结尾）
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 是否开启伪静态URL

  // 页面缓存时间（秒），可节省资源，提高加载速度
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 页面静态缓存时间

  // 主题外观模式，支持 light、dark、auto
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // 主题外观模式

  // 夜间模式生效时间范围，小时制
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式时间范围

  // 作者昵称
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '夜长昼短', // 显示的作者名称

  // 作者简介
  BIO: process.env.NEXT_PUBLIC_BIO || '一个普通的干饭人🍚', // 博主的个人简介

  // 博客链接
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://blog.4035666.xyz', // 博客网址链接

  // 搜索关键词，SEO优化用
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'wsyts,防护, 博客', // 网站关键词，用英文逗号隔开

  // 网站图标 favicon 的地址
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // 网站 favicon 图标路径

  // ICP备案号（可选）
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 如果你有ICP备案，可填备案号

  // ICP备案查询链接
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // 备案号跳转链接

  // 是否启用 RSS 订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅

  // 其余配置拆分在 conf 文件夹中
  ...require('./conf/comment.config'), // 评论插件配置
  ...require('./conf/contact.config'), // 联系方式配置
  ...require('./conf/post.config'), // 文章配置
  ...require('./conf/analytics.config'), // 网站访问统计配置
  ...require('./conf/image.config'), // 图片配置
  ...require('./conf/font.config'), // 字体配置
  ...require('./conf/right-click-menu'), // 右键菜单配置
  ...require('./conf/code.config'), // 代码高亮与样式配置
  ...require('./conf/animation.config'), // 动画与转场效果配置
  ...require('./conf/widget.config'), // 页面悬浮挂件（音乐、宠物等）
  ...require('./conf/ad.config'), // 广告插件配置
  ...require('./conf/plugin.config'), // 第三方插件配置（如algolia搜索）

  ...require('./conf/layout-map.config'), // 页面路由与布局映射
  ...require('./conf/notion.config'), // Notion数据库相关设置
  ...require('./conf/dev.config'), // 开发与调试相关配置

  // 自定义 JS 文件链接
  CUSTOM_EXTERNAL_JS: [''], // 自定义外部JS文件

  // 自定义 CSS 文件链接
  CUSTOM_EXTERNAL_CSS: [''], // 自定义外部CSS文件

  // 是否启用自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 是否使用自定义菜单

  // 是否允许复制页面内容
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许访客复制博客内容

  // 侧边栏位置是否反转
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false, // 侧边栏是否反转（从右改左）

  // 博客欢迎语，多个用逗号隔开
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，我是一个干饭人,欢迎来到我的博客🎉',

  // 是否开启UUID跳转到slug的映射
  UUID_REDIRECT: process.env.UUID_REDIRECT || false // 启用UUID跳转功能
}

module.exports = BLOG
