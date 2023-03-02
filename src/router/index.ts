import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: ['/', '/home'],
      name: 'Home',
      component: HomeView
    },
    {
      path: '/addProject',
      name: 'AddProject',
      component: () => import('../views/AddProject.vue')
    }
  ]
})

export default router
