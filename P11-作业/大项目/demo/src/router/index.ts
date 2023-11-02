import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../views/goods.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: () => import('../views/zhuce.vue')
  },
  {
    path: '/yzmlogin',
    name: 'yzmlogin',
    component: () => import('../views/yzmlogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
