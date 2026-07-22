import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {

  state: () => ({
    token: localStorage.getItem('token') || ''
  }),

  getters: {

    isLoggedIn(state) {
      return state.token !== ''
    }

  },

  actions: {

    login() {

      this.token = 'dummy-token'
      console.log('berhasil login')
      localStorage.setItem(
        'token',
        this.token
      )

    },

    logout() {

      this.token = ''
      console.log('berhasil logout')
      localStorage.removeItem(
        'token'
      )

    }

  }

})