---
date: 2021-06-30
title: Good Boy
tags: [vitepress, markdown]
description:

head:
  - - meta
    - property: 'og:image'
      content: https://foo.bar/baz.png

---
<script setup>
import { useData } from 'vitepress'
const { site, page, theme, frontmatter } = useData()
</script>

# Good Boy Here!


What is http://localhost:3000

__SITE__
<pre>{{ site }}</pre>

__THEME__
<pre>{{ theme }}</pre>

__PAGE__
<pre>{{ page }}</pre>

__FRONTMATTER__
<pre>{{ frontmatter }}</pre>
