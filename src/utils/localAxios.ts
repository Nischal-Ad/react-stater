import axios from 'axios'

const localAxios = axios.create({
  // baseURL: 'http://13.233.233.118:8000/api/v1',
  baseURL: '',
  withCredentials: true,
  timeout: 10000,

  // headers: {
  //   Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  // },
})

localAxios.interceptors.response.use((response) => response.data)

// localAxios.interceptors.request.use((config) => {
//   const [pathname, queries] = config.url?.split('?') || ''

//   const q = new URLSearchParams(queries)

//   const apiKey = undefined
//   if (apiKey) q.set('apiKey', apiKey)

//   config.url = `${pathname}?${q.toString()}`

//   return config
// })

export default localAxios
