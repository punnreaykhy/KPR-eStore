import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeKPRView.vue'
import LandView from '../views/LandingView.vue'
import CartView from '../views/CartView.vue'
import CustomerInfoView from '../views/CustomerInfoView.vue'



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
      path: '/checkout/customer-info',
      name: 'customer-info',
      component: CustomerInfoView
    },
    {
      path: '/checkout/shipping',
      name: 'shipping',
      component: () => import('../views/ShippingView.vue')
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
