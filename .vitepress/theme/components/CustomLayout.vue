<template lang="pug">
div
  Layout
    template(#sidebar-top)
      b
        i {{ nut.text1 }} SPECIAL SIDEBAR TOP
    template(#home-hero)
      b
        i {{ nut.text2 }} SPECIAL HERO
    template(#home-footer)
      b
        i SPECIAL HOME FOOT
    template(#page-bottom)
      b
        i SPECIAL PAGE BOTTOM
  //Footer
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

//import Footer from './footer.vue'
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


