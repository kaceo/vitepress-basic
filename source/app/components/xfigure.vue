<template lang="pug">

.not-prose.text-center
  .shadow.shadow-md.rounded.rounded-sm.p-2
    figure
      img(:src="src" :alt="alt")
    p.text-sm.px-4.my-0
      i {{caption}}
</template>

<script setup>
const props = defineProps ({
  caption: String,
  alt: String,
  src: String,
})
</script>
