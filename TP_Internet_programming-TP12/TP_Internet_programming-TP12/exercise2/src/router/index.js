import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView'
import DashboardView from '../views/dashboard/DashboardView'
import CategoryView from '../views/dashboard/page/CategoryView'
import ItemView from '../views/dashboard/page/ItemView'
import ProductView from '../views/dashboard/page/ProductView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    children: [
      {
        path: 'category',
        name: 'dashboard/category',
        component: CategoryView
      },
      {
        path: 'item',
        name: 'dashboard/item',
        component: ItemView,
      },
      {
        path: 'product',
        name: 'dashboard/product',
        component: ProductView,
      },
    ],
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
