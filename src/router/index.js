import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeKPRView.vue'
import LandView from '../views/LandingView.vue'
import ProductView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
  ]
})

export default router
