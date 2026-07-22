import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.ts'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Users from '../components/Users.vue'
import UserDetail from '../components/UserDetail.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'

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
    path: '/users',
    name: 'Users',
    component: Users,
    children: [
      {
        path: ':id',
        name: 'UserDetail',
        component: UserDetail,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.path.startsWith('/users') && !authStore.isLoggedIn) {
    return '/login'
  }
})

export default router 
