<template lang="pug">
.event-card
  h4 {{ event.name }}
  .status
    span Status: {{ event.status }}
  img(:src="event.image")
  div {{ event.id }}
</template>

<script setup>
//span.status-icon-r(v-if="status==='Dead'")
//span.status-icon-g(v-else-if="status==='Alive'")

import { defineProps } from "vue"

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})

//const status = event.status
</script>


<style>
.event-card {
	width: 320px;
	height: auto;
	min-height: 450px;
	background: rgb(60, 62, 68);
	border-radius: 20px;
	overflow: hidden;
	padding: 10px 15px;
	margin-bottom: 24px;
	margin-right: 10px;
	transition: all 0.2s linear;
	cursor: pointer;
	color: white;
}
.status {
	display: flex;
	justify-content: center;
}
.status-icon-r,
.status-icon-g {
	margin: auto 0;
	height: 0.5rem;
	width: 0.5rem;
	margin-right: 0.375rem;
	background: rgb(214, 61, 46);
	border-radius: 50%;
}
.status-icon-g {
	background: rgb(92 199 12);
}
img {
	margin-top: 5%;
}
.event-card:hover {
	transform: scale(1.01);
	box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
		0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
	margin: 0;
}
.event-link {
	color: black;
	text-decoration: none;
	font-weight: 100;
}
</style>
