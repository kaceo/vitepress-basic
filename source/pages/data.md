---
title: All About Us
description: Everything You Want to Know But Dare not ask
thumbnail: something
author: Mr Jack
keywords: [Life, Money]
---
<script setup>
//import { useUserStore } from './vue/stores/user'
//const user = useUserStore()
//Logged in as {{ user.name }}

import { useData } from 'vitepress'
const { page } = useData()
</script>

# About


<pre> {{ page }} </pre>
<pre>  user  </pre>

