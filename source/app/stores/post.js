import { defineStore } from 'pinia'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
  }),
  getters: {
    getPosts(state) {
      return state.posts
    }
  },
  actions: {
    async fetchPosts() {
      console.log('Try to Fetch')
      try {
        const data = await axios.get(url)
        this.posts = data.data
        console.log('Fetched', this.posts)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
})
