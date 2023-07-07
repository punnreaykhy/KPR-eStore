import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeKPRView.vue'
import LandView from '../views/LandingView.vue'
import CartView from '../views/CartView.vue'
import CustomerInfoView from '../views/CustomerInfoView.vue'
import TestView from '../../test.vue'



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
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
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
