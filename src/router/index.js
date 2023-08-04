import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeKPRView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ListAllProductsView.vue'),
    },
    {
      path: '/products/:name',
      name: 'productsByCate',
      component: () => import('../views/ListByCateView.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/search/:name',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/checkout/customer-info',
      name: 'customer-info',
      component: () => import('../views/CustomerInfoView.vue')
    },
    {
      path: '/checkout/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue')
    },
    {
      path: '/checkout/invoice',
      name: 'invoice',
      component: () => import('../views/InvoiceView.vue')
    },
    
    
  ]
})

export default router
