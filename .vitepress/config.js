import { defineConfig } from 'vitepress'

import nav from './site/nav.json'
import sidebar from './site/sidebar.json'
import head from './site/head.json'
import analytics from './site/analytics.json'

import content from '@originjs/vite-plugin-content'
//import vql from 'vite-plugin-vue-gql'
import radar from 'vite-plugin-radar'
import compress from 'vite-plugin-compress'

//const markdown = require("v-press-plus/dist/vitepress").markdown;
//const anchor = require('markdown-it-anchor')
const fa = require('@gerhobbelt/markdown-it-fontawesome')
const dl = require('markdown-it-deflist')
const base = '/vitepress-basic/'
//const base = process.env.BASE || '/'


export default defineConfig({
  //base,
  srcDir: 'source',
  outDir: 'dist',
  lang: 'en-US',
  //srcExclude: ,
  shouldPreload: false,
  //scrollOffset: ,
  scrollOffset: 'header',
  //cleanUrls: true,
  //mpa: true,

  //========================================
  //site constants
  //extends: ,
  title: 'vitepress' ,
  description: 'Simple Vite static site generator.',
  //locales: ,
  //lastUpdated: ,
  editLink: {
    repo: 'vuejs/docs',
    text: 'Edit this page on GitHub',
  },
  footer: {
    license: {
      text: 'MIT License',
      link: 'https://opensource.org/licenses/MIT',
    },
    copyright: `Copyright © 2022-${new Date().getFullYear()} Mr Big`
  },
  head,
  themeConfig: {
    nav,
    sidebar,
  },

  //========================================
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
  //vite
  vite: {
    plugins: [
      content(),
      //vql(),
      //radar(analytics),
      //compress(),
    ],
  },
})

