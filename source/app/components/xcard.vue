<template lang="pug">
.card
  figure
    img(
      :src="src"
      alt="picture")
  .card-body.prose
    h3.card-title {{ title }}
    slot
      p Your Description Here
    .card-actions.justify-end
      button.btn.btn-primary {{ actiontext }}

</template>

<script setup>
// define the props
// image src, alt
// title
// text
// button label, action

const props = defineProps({
  title: String,
  src: String,
  actiontext: String,
})
</script>


<style lang="sass">
.card
  @apply card-compact w-96 max-w-full shadow-xl bg-base-100

  figure, img, .card-title
    @apply m-0  #{!important}
</style>
