import path from 'path'
import { defineConfig } from 'vitepress'

import content from '@originjs/vite-plugin-content'
//import vql from 'vite-plugin-vue-gql'
import radar from 'vite-plugin-radar'
import compress from 'vite-plugin-compress'

//const markdown = require("v-press-plus/dist/vitepress").markdown;
//const anchor = require('markdown-it-anchor')
const fa = require('@gerhobbelt/markdown-it-fontawesome')
const dl = require('markdown-it-deflist')

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
  srcExclude: ['app/**/*'] ,
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

