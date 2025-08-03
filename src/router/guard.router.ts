import { hasCookie } from '@/utils/useCookies'
import type { Router } from 'vue-router'

function isAuthenticated(): boolean {
  return hasCookie("access_token") // or use Pinia/composable/etc
}

export function applyGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const publicPaths = ['/auth', '/login']
    const requiresAuth = !publicPaths.includes(to.path)

    if (requiresAuth && !isAuthenticated()) {
      return next('/auth')
    }

    next()
  })
}
