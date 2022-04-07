import { defineConfig } from 'vitepress'

//const markdown = require("v-press-plus/dist/vitepress").markdown;
//const anchor = require('markdown-it-anchor')
//env BASE = /otto/
//const base = process.env.BASE || '/'
const base = '/vitepress-basic/'

const fa = require('@gerhobbelt/markdown-it-fontawesome')
const dl = require('markdown-it-deflist')

export default defineConfig({
  //see https://github.com/vuejs/vitepress/blob/main/src/node/config.ts
  //--------------------------------------------------
  base: base,
  srcDir: 'source',
  //srcExclude: ,
  outDir: 'dist',
  shouldPreload: false,
  //scrollOffset: ,
  //cleanUrls: true,
  //mpa: true,

  //extends: ,
  lang: 'en-US',
  title: 'vitepress' ,
  description: 'Simple Vite static site generator.',
  //locales: ,
  //lastUpdated: ,

  //vue: ,
  //vite: ,

  //markdown: ,
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: (md) => {
      md
      .use(fa)
      .use(dl)
    },
  },

  head: metahead(),
  themeConfig: {
    nav: sbTop(),
    sidebar: {
      '/guide/': sbGuide(),
      '/config/': sbConfig(),
      '/': sbGuide()
    },
  },

})

function metahead() {
  return [
    ['meta', {name: 'author', content: 'author', }],
    ['meta', {name: 'og.title', content: 'Home', }],
    ['meta', {name: 'og.description', content: 'Home of', }],
    ['link', {
      rel: 'icon', type: 'image/svg+xml',
      href: '/logo.svg',
    }],
    ['link', {
      rel: "stylesheet", type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
    }],
  ]
}

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

/*
  vite: {
    plugins: [
      require('vite-plugin-yaml')
    ]
  },
  themeConfig: {
    //nav,
    //sidebar,
    //algolia
    //carbonAds
    //socialLinks
    //editLink
    //footer
  },

  //markdown:
  //vite:
  //vue:
*/
