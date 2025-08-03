import axios, {type AxiosInstance } from 'axios'

export const createAxiosInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
