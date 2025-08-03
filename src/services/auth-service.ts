
import { createAxiosInstance } from './../plugins/axios';

const authAPI = createAxiosInstance(import.meta.env.VITE_AUTH_API);
authAPI.defaults.withCredentials = true;

export default authAPI;
