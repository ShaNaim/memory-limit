import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  withCredentials: true,
})

export const setupAxiosInterceptors = (authStore) => {
  api.interceptors.request.use(
    (config) => {
      const token = authStore.csrfToken
      if (token) {
        config.headers['X-XSRF-Token'] = token
      }
      return config
    },
    (error) => Promise.reject(error),
  )

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        authStore.logout()
      }
      return Promise.reject(error)
    },
  )
}

export default api
