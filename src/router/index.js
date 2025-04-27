import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/About/index.vue'
import Home from '@/pages/Home/index.vue'
import Game from '@/pages/Game/index.vue'
import Result from '@/pages/Result/index.vue'
import NotFound from '@/pages/NotFound/index.vue'
import Login from '@/pages/Auth/login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/results/:score',
    name: 'Result',
    component: Result,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
