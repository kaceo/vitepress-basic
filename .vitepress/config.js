import path from 'path'
import { defineConfig } from 'vitepress'

import content from '@originjs/vite-plugin-content'
//import vql from 'vite-plugin-vue-gql'
import radar from 'vite-plugin-radar'
import compress from 'vite-plugin-compress'

//const markdown = require("v-press-plus/dist/vitepress").markdown;
//const anchor = require('markdown-it-anchor')
//const fa = require('@gerhobbelt/markdown-it-fontawesome')

const dl = require('markdown-it-deflist')

const fn = require('./plugins/md-footnote')
//const fn = require('markdown-it-footnote')
const cicons = require ('./plugins/md-icons')
const chints = require ('./plugins/md-hints')

//const getPages = require("./utils/pages.js")

const SOURCE = '../source'
import siteconfig from '../source/app/site.config'

//import nav from './site/nav.json'
//import sidebar from './site/sidebar.json'
//const nav = siteconfig.navigation
//const sidebar = siteconfig.sidebar
//const socials = siteconfig.socials
//import head from './site/head.json'
//import analytics from './site/analytics.json'

const myrepo = siteconfig.git.owner+'/'+siteconfig.git.repo

//const base = process.env.BASE || '/'
const base = '/'+siteconfig.git.repo+'/'

export default defineConfig({
  base,
  srcDir: 'source',
  srcExclude: [
    'app/**/*', // vue+js
    'templates/**/*', // page templates
  ],
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
  title: siteconfig.title,
  description: siteconfig.description,
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
  head: siteconfig.head,
  themeConfig: {
    nav: siteconfig.navigation,
    sidebar: siteconfig.sidebar,
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
    //logo: siteconfig.logo,
    // siteconfig.socials???
    monkey: {
      ape: "John",
      utan: "Orang",
    },
  },

  //========================================
  //markdown: ,
  markdown: {
    xhtmlOut: true,
    lineNumbers: true,
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    linkify: false,
    config: (md) => {
      md.use(cicons) // icons fa, mdi
      .use(chints) // asset hints
      .use(fn) // footnotes
      .use(dl) // deflists
    },
  },
  //vite
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, SOURCE),
      },
    },
    plugins: [
      content(),
      //vql(),
      //radar(siteconfig.analytics),
      //compress(),
    ],
    // build: {minify: false},
  },
  //optimizeDeps: {keepName: true},
})


/*
sdfgssdf/markdown-it-vue

  "github-markdown-css": "^3.0.1",
  "markdown-it": "^10.0.0",
  "markdown-it-abbr": "^1.0.4",
  "markdown-it-emoji": "^1.4.0",
  "markdown-it-icons": "^0.4.1",
  "markdown-it-ins": "^3.0.0",
  "markdown-it-mark": "^3.0.0",
  "markdown-it-sub": "^1.0.0",
  "markdown-it-sup": "^1.0.0",
  "markdown-it-deflist": "^2.0.3",
  "markdown-it-container": "^2.0.0",
  "markdown-it-footnote": "^3.0.1",
  "markdown-it-task-lists": "^2.1.1",
  "markdown-it-katex": "^2.0.3",
  "markdown-it-latex": "^0.2.0",
  "markdown-it-source-map": "^0.1.1",
  "markdown-it-toc-and-anchor": "^4.1.2",
  "markdown-it-github-toc": "^3.2.4",
  "highlight.js": "^9.16.2",
  "vue": "^2.6.6"

*/
