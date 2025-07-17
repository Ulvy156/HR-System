import { createRouter, createWebHistory } from 'vue-router'
import hrRoutes from './hr.routes';
import payrollRoute from './payroll.route';
import attendanceRoute from './attendance.route';
import authRoute from './auth.route';
import employeeRoute from './employee.route';
import leaveRoute from './leave.route';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...hrRoutes,
    ...payrollRoute,
    ...attendanceRoute,
    ...authRoute,
    ...employeeRoute,
    ...leaveRoute
  ],
})

export default router
