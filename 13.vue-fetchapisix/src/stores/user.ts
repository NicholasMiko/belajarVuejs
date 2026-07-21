import { defineStore } from 'pinia'
import { api } from '../api/utility'

export interface UserResponse {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: number
      lng: number
    }
  }
  phone: number
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as UserResponse[]
  }),

  getters: {
    totalUsers(state) {
      return state.users.length
    }
  },

  actions: {
    async fetchUsers() {
      this.users = await api('/users')
    }
  }
})