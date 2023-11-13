import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('../views/product.vue')
      },
      {
        path: '/product-category',
        name: 'product-category',
        component: () => import('../views/product-category.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (!token && to.path != '/login') {
    next('/login')
  } else if (token && to.path == '/login') {
    next('/')
  } else {
    next()
  }
})

export default router
