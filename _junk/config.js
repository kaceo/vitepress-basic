import { defineConfig } from 'vitepress'

//const anchor = require('markdown-it-anchor')
//env BASE = /otto/
//const base = process.env.BASE || '/'
const base = '/otto/'

export default defineConfig({
  root: 'source',
  publicDir: 'public',

  base: base,
  lang: 'en-US',

  title: 'TangoViPedia',
  description: 'Simple Vite static site generator.',
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.svg',
    }],
    ['meta', {name: 'author', content: 'author', }],
    ['meta', {name: 'og.title', content: 'Home', }],
    ['meta', {name: 'og.description', content: 'Home of', }],
  ],

  themeConfig: {
    // logo:
    repo: 'vuejs/vitepress',
    docsDir: '/',
    docsBranch: 'main',

    //posts: await getPosts(),
    //pageSize: 5,
    //postLength: await getPostLength(),

    //algolia: {
    //  appId: '8J64VVRP8K',
    //  apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //  indexName: 'vitepress'
    //},

    //carbonAds: {
    //  carbon: 'CEBDT27Y',
    //  custom: 'CKYD62QM',
    //  placement: 'vuejsorg'
    //},

    nav: sbTop(),
    sidebar: {
      '/guide/': sbGuide(),
      '/config/': sbConfig(),
      '/': sbGuide()
    },

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    //lastUpdated: 'Last Updated',
    lastUpdate: false,
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    /*
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    },
    */
  },
})

function sbTop() {
  return [
    //{ text: 'Guide',
    //  link: '/',
    //  activeMatch: '^/$|^/guide/' },
    //{ text: 'Config Reference',
    //  link: '/config/basics',
    //  activeMatch: '^/config/' },
    //{ text: 'Release Notes',
    //  link: 'https://github.com/vuejs/vitepress/releases' },
    {
      text: "🏡Home",
      link: "/",
    },
    {
      text: "🔖Tags",
      link: "/tags",
    },
    {
      text: "📃Archives",
      link: "/archives",
    },
  ]
}

function sbGuide() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?',
          link: '/' },
        { text: 'Getting Started',
          link: '/guide/getting-started' },
        { text: 'Configuration',
          link: '/guide/configuration' },
        { text: 'Asset Handling',
          link: '/guide/assets' },
        { text: 'Markdown Extensions',
          link: '/guide/markdown' },
        { text: 'Using Vue in Markdown',
          link: '/guide/using-vue' },
        { text: 'Deploying',
          link: '/guide/deploy' },
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter',
          link: '/guide/frontmatter' },
        { text: 'Theming',
          link: '/guide/theming' },
        { text: 'API Reference',
          link: '/guide/api' },
        { text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress' },
      ]
    },
  ]
}

function sbConfig() {
  return [
    {
      text: 'App Config',
      children: [
        { text: 'Basics', link: '/config/basics' },
      ]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' },
      ]
    },
  ]
}
