import { ElNotification } from "element-plus";

type NotificationTypes = 'success' | 'warning' | 'info' | 'error' | 'primary';

interface Notification {
  message: string,
  title: string,
  type?: NotificationTypes
}
export function useNotification(notification: Notification) {
  ElNotification({
    title: notification.title,
    message: notification.message,
    type: notification.type ?? 'success',
  })
}
