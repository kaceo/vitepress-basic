<template lang="pug">
.block
  .rev DATA {{ msg }}
  i Getters
  div( v-for="g in getPosts" :key="g.id"
  ) {{g.id}} {{g.name}}
  hr
  i Actions
  div( v-for="g in posts" :key="g.id"
  ) {{g.id}} {{g.name}}
  hr
  .avatar
    .w-24.rounded-full
      img(src="https://api.lorem.space/image/face?hash=92310")
  hr
  .mockup-phone.border-primary
    .camera
    .display
      .artboard.artboard-demo.phone-1 Hi.

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePostStore } from '~/app/stores/post'
const store = usePostStore()


// reactive string
const msg = ref('Welcome to state manager')
// states
const posts = computed(() => {
  return store.posts
})
// getters
const getPosts = computed(() => {
  return store.getPosts
})
// actions
onMounted(() => {
  store.fetchPosts()
})




/*
//import { useData, withBase } from 'vitepress'
//import Player from './player.vue';
//import Deal from '~/app/components/deal.vue'
//import dealer from '~/app/services/dealer'
const events = ref([])
const url = 'https://jsonplaceholder.typicode.com/posts'

events.value =
{
  name: "Rick Sanchez",
  status: "Alive",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  id: "hello",
}
{
  name: "Rick Sanchez",
  status: "Alive",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  id: "hello",
}

events.value = await dealer.getEvents()
.then ((res) => res.data)
await dealer.getEvents()
.then((a) => a.json()

  .then((response)=>{
    console.log('Events fetch:', response.data.results);
    return response.data.results;
  })
  .catch((error)=>{
    console.log(error);
  })

const acard= {
  name: "Rick Sanchez",
  status: "Alive",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  id: "hello",
}

const loading=ref(true)
const error=ref(null)
const data=ref(null)

function fetchdata() {
  loading.value=true
  return fetch(url,{
    method:'get', headers: {'content-type':'application/json'}
  })
  .then(res=>{
    if(!res.ok) {
      const error = new Error(res.statusText)
      error.json = res.json()
      throw error
    }
    return res.json()
  })
  .then(json=>{
    data.value = json.data
  })
  .catch(err=>{
    error.value = err
    if(err.json) {
      return err.json.then(json=>{
        error.value.message = json.message
      })
    }
  })
  .then(()=> {
    loading.value = false
  })
}

onMounted(()=>{fetchdata()})

events.value =
{
  name: "Rick Sanchez",
  status: "Alive",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  id: "hello",
}

//await dealer.getEvents()

const posts =
await fetch(url).then((a)=>a.json())

*/
//<Deal :event="acard" />
//<Deal v-for="event in events" :key="event.id" :event="event" />
//const { frontmatter } = useData()
/*
.block {
  border: 2px solid #cc9;
  margin: 8px;
  overflow: hidden;
}
.rev {
  background-color: #9FF;
  font-weight: bold;
  text-align: center;



*/
</script>

