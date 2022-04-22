<template lang="pug">

.not-prose.text-center
  .shadow.shadow-md.rounded.rounded-sm.p-2
    figure
      img(:src="withBase(src)" :alt="alt")
    p.text-sm.px-4.my-0
      i {{caption}}
</template>

<script setup>
import { withBase } from 'vitepress'
import { computed } from 'vue'

const props = defineProps ({
  caption: String,
  alt: String,
  src: String,
})

const ssrc = computed(() => {
  //let imgUrl = new URL(props.src.value, import.meta.url).href
  let imgUrl = props.src.value
  return withBase(imgUrl)
})
</script>
