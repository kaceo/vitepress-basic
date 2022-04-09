<template lang="pug">
.block
  .rev DATA
  pre {{ events }}

</template>

<style scoped>
.block {
  border: 2px solid #cc9;
  margin: 8px;
  overflow: hidden;
}
.rev {
  background-color: #9FF;
  font-weight: bold;
  text-align: center;
}
</style>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData, withBase } from 'vitepress'
import Deal from '@/vue/components/deal.vue'
import dealer from '@/vue/services/dealer.js'

const url = 'https://jsonplaceholder.typicode.com/posts'

const events = ref([])

events.value = await dealer.getEvents()
.then ((res) => res.data)


/*
{
  name: "Rick Sanchez",
  status: "Alive",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  id: "hello",
}
*/


/*
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


</script>
