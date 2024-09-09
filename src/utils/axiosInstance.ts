import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'http://13.233.233.118:8000/api/v1',
  baseURL: '',
  withCredentials: true,
  timeout: 10000,

  // headers: {
  // 'Content-Type': 'application/json',
  // Accept:'application/json',
    // Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  // },
})

axiosInstance.interceptors.response.use((response) => response.data)

// axiosInstance.interceptors.request.use((config) => {
// const accessToken = localStorage.getItem('accessToken');

// if(accessToken){
//   config.headers["Authorization"]=`Bearer ${accessToken}`;
// }

//   const [pathname, queries] = config.url?.split('?') || ''

//   const q = new URLSearchParams(queries)

//   const apiKey = undefined
//   if (apiKey) q.set('apiKey', apiKey)

//   config.url = `${pathname}?${q.toString()}`

//   return config
// })

export default axiosInstance
