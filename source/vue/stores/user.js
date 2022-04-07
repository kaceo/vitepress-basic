import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
    isAdmin: true
  }),
  actions: {
    async login(user, password) {
      const userData = await apiLogin(user, password)
      this.patch({
        name: user,
        ...userData,
      })
    },
    logout() {
      this.patch({
        name: '',
        isAdmin: false,
      })
      // we could do other stuff like redirecting the user
    },
  },
})

function apiLogin(a, p) {
  if (a === 'ed' && p === 'ed')
    return Promise.resolve({ isAdmin: true })
  if (p === 'ed')
    return Promise.resolve({ isAdmin: false })
  return Promise.reject(new Error('invalid credentials'))
}
