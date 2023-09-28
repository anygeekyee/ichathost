import axios from 'axios'
import { ElMessage } from 'element-plus'

// const baseURL = process.env.BASE_URL
const baseURL = import.meta.env.VITE_BASE_URL

const request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
})

//请求拦截器
request.interceptors.request.use((config) => {
  return config
})

//响应拦截器
request.interceptors.response.use(
  (response) => {
    //响应拦截器成功的回调,一般会进行简化数据
    return response.data
  },

  (error) => {
    console.log('error')
    let message = ''
    const type = 'error'
    const status = error.response.status

    switch (status) {
      case 404:
        message = '请求失败路径出现问题'
        break
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 505:
        message = '服务器挂了'
        break
      case 401:
        message = '参数有误'
        break
      default:
        message = '未知错误'
        break
    }
    ElMessage({ type, message })
    return Promise.reject(new Error(error.message))
  },
)

export default request
