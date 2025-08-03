export default [
  {
    path: '/attendance',
    component: () => import('@/components/features/HR/HR-Layout.vue'),
    meta: { requiresAuth: true, allowedRoles: ['hr', 'admin'] },
    children: [
      {
        path: '/',
        name: '/',
        component: () => import('@/components/features/HR/HR-Layout.vue'),
        meta: { requiresAuth: true, allowedRoles: ['hr'] },
      },
    ],
  },
]
