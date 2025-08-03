
import { createAxiosInstance } from './../plugins/axios';

const userAPI = createAxiosInstance(import.meta.env.VITE_USER_API);
userAPI.defaults.withCredentials = true;

export default userAPI;
