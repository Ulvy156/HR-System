import type { RouteRecordRaw } from "vue-router";
import attendanceRoute from "./attendance.route";
import authRoute from "./auth.route";
import employeeRoute from "./employee.route";
import hrRoutes from "./hr.routes";
import leaveRoute from "./leave.route";
import payrollRoute from "./payroll.route";

const recordRoute: RouteRecordRaw[] = [
  ...authRoute,
  ...hrRoutes,
  ...payrollRoute,
  ...attendanceRoute,
  ...employeeRoute,
  ...leaveRoute
]

export default recordRoute;
