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
const myfile = ref('./book/images/illustration-1.png')
</script>

## Good Grief

What is this ?

- tell me
- good

End of events

![A Pix](./book/images/illustration-1.png)

---

<Xfigure src="./book/images/illustration-1.png"
caption="My special book" />

---

Look at {{ myfile }}

Look at {{ withBase(myfile) }}
