---
home: false
sidebar: false

tagline: Hero subtitle
heroAlt: Logo image
heroText: Alice in Wonderland
actionText: Get Started
actionLink: /book/alice-00
heroImage: /pix1.jpg

features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.

  - title: Vue-Powered
    details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.

  - title: Performant
    details: VitePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.

footer: MIT Licensed | Copyright © 2019-present Evan You

---

<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'

import _tmp1 from './book/images/illustration-4.png'
import _tmp2 from "./book/images/illustration-1.png"

//const ximgurl = ref(_tmp)

</script>

## Good Grief

What is this ?



<Xfigure :src="_tmp1"
caption="My special book" />

---

Look at {{ _tmp2 }}

Look at {{ withBase(_tmp2) }}

---

![A Pix](./book/images/illustration-1.png)

