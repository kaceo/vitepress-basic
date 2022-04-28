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
import _tmp1 from './book/images/illustration-4.png'
import _tmp2 from "./book/images/illustration-1.png"
</script>

::: tip How to Eat
Try eating everyday!
:::

## Good Grief {#custom-head}

$$$ v-pre special donkey
So many animals are { a nice } please
$$$





$$$ test special monkey
I love a monkey, do *you* ?
Let's __run to__ a special place !
$$$




![alt text](http://your.cdn/original/image.jpg "image title")(http://your.cdn/sm/image.jpg "(min-width:0px)")(http://your.cdn/md/image.jpg "(min-width:640px)")(http://your.cdn/lg/image.jpg "(min-width:1280px)")



<Xfigure :src="_tmp1"
caption="My special book" />

---
## Sad Monkey

<Xfigure :src="_tmp2"
caption="My special book" />
---

! [Alt Pix] (./book/images/illustration-1.png "Title Pix")


markdown-it-imsize
! [Alt test] (./book/images/illustration-1.png "title test" =100x200)


The quick brown fox _jumps_ over the **lazy** dog.
Let's try some ~~Striked~~ text or <del>Striked</del> text

This :) is :,'( and >:( wearing 8-) and ;-)
always :yum: and :smirk: but :laughing:
this is my :heart_eyes: kissing a :imp: and
:poop: at a :ghost: giving :kiss: to :heartbeat:
and then :thumbsup: plus a :fist: and :clap:


==Here's== a simple footnote,[^1] and here's a longer one.[^bignote]

Hello World! :fab-facebook: and  :mdi-barcode: and :fab-google:

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraph.
  Indent paragraph to include them in the footnote.
  `{ my code}`
  Add as many paragraph as you like.



First Term
: this is the definition

Second Term
: another definition
: but I like this better

