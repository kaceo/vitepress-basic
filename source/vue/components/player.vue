<template lang="pug">
.player-container
  h2 Special Video Player
  hr
  slot
  hr
  div Src = {{src}}
  div Title = {{ title }}
  hr
  div Your Video Content
</template>

<script setup>
const props = defineProps({
  src: String,
  title: String,
})
</script>

<style scoped>
.player-container {
  background-color: #eeeecf;
  border: 1px solid #44E;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 0;
}
</style>
