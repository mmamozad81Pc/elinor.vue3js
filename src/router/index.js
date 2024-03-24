import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: () => import('../views/aboutUs.vue')
    },
    {
      path: '/login-register',
      name: 'login',
      component: () => import('../views/loginRegister.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
    {
      path: '/product-details/:id',
      name: 'productDetails',
      component: () => import('../views/productDetails.vue')
    },
    {
      path: '/404',
      name: 'notfound',
      component: () => import('../views/notfound.vue')
    },
    {
      path: '/*',
      name: 'notfound',
      component: () => import('../views/notfound.vue')
    }
  ]
})

export default router
