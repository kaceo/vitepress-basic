import path from 'path'
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
const myrepo = 'kaceo'+base
//const base = process.env.BASE || '/'

//const getPages = require("./utils/pages.js")

export default defineConfig({
  base,
  srcDir: 'source',
  srcExclude: ['vue/**/*.md'] ,
  outDir: 'dist',
  lang: 'en-US',
  shouldPreload: false,
  //scrollOffset: ,
  scrollOffset: 'header',
  //cleanUrls: true,
  //mpa: true,

  //========================================
  //site constants
  //extends: ,
  //dest: 'public',
  title: 'Demo Vitepress' ,
  description: 'Simple Vite static site generator.',
  //locales: ,
  //lastUpdated: ,
  editLink: {
    repo: myrepo,
    text: 'Edit this page on GitHub',
  },
  footer: {
    license: {
      text: 'MIT License',
      link: 'https://opensource.org/licenses/MIT',
    },
    copyright: `Copyright © 2022-${new Date().getFullYear()} Mr Big`
  },

  //========================================
  // themes
  head,
  themeConfig: {
    nav,
    sidebar,
    //pages: await getPages(),
    //posts: await getPosts(),
    //pageSize: 2,
    //website: 'mywebsite',
    //comment: {
    //  repo: 'name/repo',
    //  themes: 'github-light',
    //  issueTerm: 'pathname',
    //},
    //author: 'someone',
    //search: true,
    //displayAllHeaders: true
    //logo: '/favicon.ico'
  },

  //========================================
  //markdown: ,
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    linkify: false,
    config: (md) => {
      md.use(fa)
      md.use(dl)
    },
  },
  //vite
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../source'),
      },
    },
    plugins: [
      content(),
      //vql(),
      //radar(analytics),
      //compress(),
    ],
    // build: {minify: false},
  },
  //optimizeDeps: {keepName: true},
})

