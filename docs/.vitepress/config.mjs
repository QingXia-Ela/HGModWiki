import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "皓际大冒险Mod教程",
  base: process.env.NODE_ENV === "development" ? "/" : "/HGModWiki/",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始', link: '/什么是MOD' },
      { text: '基础内容', link: '/了解参数' },
      { text: '小工具', link: '/JSON快速制作器' }
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '什么是MOD', link: '/什么是MOD' },
          { text: '快速入门', link: '/快速入门' }
        ]
      },
      {
        text: '基础内容',
        items: [
          { text: '了解参数', link: '/了解参数' },
          { text: '多物品', link: '/多物品' },
          { text: '自定义弹幕', link: '/自定义弹幕' },
          { text: '异常处理', link: '/异常处理' },
        ]
      },
      // {
      //   text: '进阶内容',
      //   items: [

      //   ]
      // },
      {
        text: '小工具',
        items: [
          { text: 'JSON快速制作器', link: '/JSON快速制作器' },
          { text: '物品大分类ID', link: '/物品大分类ID' },
          { text: '武器小分类ID', link: '/武器小分类ID' },
          { text: '建筑小分类ID', link: '/建筑小分类ID' },
          { text: '伤害类型ID', link: '/伤害类型ID' },
          { text: '弹幕ID', link: '/弹幕ID' },
          { text: '物品ID', link: '/物品ID' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LuoTianOrange/HGModWiki' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200"><defs><style>.cls-1 {fill: #67676c;fill-rule: evenodd;}</style></defs><path id="形状_316_1" data-name="形状 316 1" class="cls-1" d="M71.429,3L179.592,19.108,0,190.926ZM186.735,23.4Q193.367,75.481,200,127.568L9.184,192l6.122-7.517Z" /></svg>',
        },
        link: 'https://hgadventure.huijiwiki.com/wiki/',
        ariaLabel: 'cool link'
      }
    ]
  }
})
