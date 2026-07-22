import { createRouter, createWebHistory } from 'vue-router'
import Tester from '../components/Tester.vue'

const routes = [
  {
    path: '/tester',
    name: 'Tester',
    component: Tester,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router