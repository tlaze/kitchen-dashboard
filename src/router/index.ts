import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/KitchenDashboardView.vue'),
  },
  {
    path: '/completed',
    name: 'CompletedOrders',
    component: () => import('../views/CompletedOrdersView.vue'),
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/AnalyticsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
