import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from '@/stores/auth.js'
import clickOutside from '@/directives/click-outside'
import './styles/tailwind.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

const authStore = useAuthStore(pinia)
await authStore.initialize()
app.directive('click-outside', clickOutside)

app.mount('#app')
