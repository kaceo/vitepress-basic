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
  //extends: ,
  //lang: ,
  base: base,
  title: 'vitepress' ,
  //description: ,
  //head: ,
  //themeConfig: ,
  //locales: ,
  //lastUpdated: ,
  srcDir: 'source',
  //srcExclude: ,
  outDir: 'dist',
  shouldPreload: false,
  //scrollOffset: ,
  cleanUrls: true,
  mpa: true,
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


  head: [
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
  ],
})
