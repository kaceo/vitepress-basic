<script setup>
import {ref } from 'vue'

const postcount=ref(0)
</script>

<template lang="pug">
div
  h2 Tags of Posts
  p Here are tags of {{ postcount }} posts
</template>

<style lang="sass">
</style>
