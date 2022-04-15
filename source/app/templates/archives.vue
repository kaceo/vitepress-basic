<script setup>
//import xcard from '~/app/components/xcard.vue'

import {ref } from 'vue'

const props=defineProps({
  pgnum: String
})

const postcount=ref(0)

/*
page: true
title: Archive
description: Archive
sidebar: false
*/
</script>

<template lang="pug">
div
  h2 Archives of Posts
  p You have {{ postcount }} posts
  i Based on {{ pgnum }} tags
</template>

<style lang="sass">
</style>


