import { defineStore } from 'pinia'
import api from '@/plugins/axios.js'
import { setupAxiosInterceptors } from '@/plugins/axios.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    csrfToken: null,
    isAuthenticated: false,
  }),

  getters: {
    userEmail: (state) => state.user?.email,
    userSlug: (state) => state.user?.slug,
    isLogin: (state) => Boolean(state.csrfToken),
  },

  actions: {
    async initialize() {
      setupAxiosInterceptors(this)

      const storedAuth = localStorage.getItem('auth')
      if (storedAuth) {
        try {
          const authData = JSON.parse(storedAuth)
          this.user = authData.user
          this.csrfToken = authData.csrfToken
          this.isAuthenticated = true
        } catch (error) {
          console.error('Failed to restore auth state:', error)
          this.clearStorage()
        }
      }
    },

    updateStorage() {
      if (this.isAuthenticated) {
        localStorage.setItem(
          'auth',
          JSON.stringify({
            user: this.user,
            csrfToken: this.csrfToken,
          }),
        )
      } else {
        this.clearStorage()
      }
    },

    clearStorage() {
      localStorage.removeItem('auth')
    },

    async login({ email, password }) {
      try {
        const response = await api.post('/auth/login', { email, password })

        if (response.data.success) {
          const { email: userEmail, slug, csrfToken } = response.data.data
          this.user = { email: userEmail, slug }
          this.csrfToken = csrfToken
          this.isAuthenticated = true
          this.updateStorage()
          return true
        }

        throw new Error(response.data.message || 'Login failed')
      } catch (error) {
        console.error('Login error:', error)
        throw error
      }
    },

    async logout() {
      try {
        await api.post('/logout')
      } catch (error) {
        console.error('Logout API error:', error)
      } finally {
        this.user = null
        this.csrfToken = null
        this.isAuthenticated = false
        this.clearStorage()
      }
    },
  },
})
