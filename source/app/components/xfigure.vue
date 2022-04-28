<template lang="pug">

.not-prose.text-center
  .shadow.shadow-md.rounded.rounded-sm.p-2
    h3 IMAGE CARD
    i Check out {{ src }}
    figure
      img(:src="src" :alt="alt" :title="caption")
      figcaption.text-sm.px-4.my-0
        i {{caption}}
</template>

<script setup>
//import { withBase } from 'vitepress'
//import { ref, computed } from 'vue'

const props = defineProps ({
  caption: String,
  alt: String,
  src: String,
})

//import yimg from props.src.value
//const yimgurl = ref(yimg)

/*
const ssrc = computed(() => {
  //let imgUrl = new URL(props.src.value, import.meta.url).href
  let imgUrl = props.src.value
  return withBase(imgUrl)
})
*/

</script>
