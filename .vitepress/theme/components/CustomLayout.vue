<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

import Footer from '~/app/templates/footer.vue'
import nut from '~/app/nut.js'

/*
slot names:
===========
navbar-search

sidebar-top
sidebar-bottom

page-top-ads
page-top
page-bottom
page-bottom-ads

home-hero
home-features
home-footer
*/
</script>

<template lang="pug">
Layout
  //Sidebar
  template(#sidebar-top)
    b
      i {{ nut.text1 }} SPECIAL SIDEBAR TOP

  //Home
  template(#home-hero)
    b
      i {{ nut.text2 }} SPECIAL HERO
  template(#home-footer)
    b
      i SPECIAL HOME FOOT
    Footer

  //Page
  template(#page-bottom)
    b
      i SPECIAL PAGE BOTTOM
    Footer
</template>

