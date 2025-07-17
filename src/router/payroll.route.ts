export default [
  {
    path: '/hr',
    component: () => import('@/components/features/HR/HR-Layout.vue'),
    meta: { requiresAuth: true, allowedRoles: ['hr', 'admin'] },
    children: [
      {
        path: 'employees',
        name: 'HREmployeeList',
        component: () => import('@/components/features/HR/HR-Layout.vue'),
        meta: { requiresAuth: true, allowedRoles: ['hr'] },
      },
    ],
  },
]
