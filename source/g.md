---

---
<script setup>
//import { ref, toRef, watchEffect } from 'vue'

//import { useData } from 'vitepress'
// useData =>
//  site:
//  page:
//  theme:
//  frontmatter:
//
//  title: string
//  description: string
//  lang: string
//  localePath: string

//import { useRouter } from 'vitepress'
// useRouter =>
//  route:
//  go(href) promise

import { useRoute } from 'vitepress'
const route = useRoute()

// useRoute =>
//  path: string
//  data:
//  component:

//import { useRoute, useRouter, useData } from 'vitepress'
//import { getCurrentInstance, onMounted, watch } from 'vue'



//<ClientOnly>
//const { site, page } = useData()
//const thisData = ref()
//const hash = ref(null)

//const xxx = defineProps({})

//  pre {{ thisData }}
//  pre {{ site }}

</script>

## g (dispatcher)

<pre>{{ route }}</pre>

