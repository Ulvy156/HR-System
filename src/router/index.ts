import { createRouter, createWebHistory } from 'vue-router'
import recordRoute from './record.route'
import { applyGuards } from './guard.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...recordRoute
  ],
})

// Apply route guards
applyGuards(router);

export default router
