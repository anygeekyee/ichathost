import axios from 'axios'

import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: '',
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
    //处理http网络错误
    const status = error.response.status
    switch (status) {
      case 404:
        //错误提示信息
        ElMessage({
          type: 'error',
          message: '请求失败路径出现问题',
        })
        break
      case 500 | 501 | 502 | 503 | 504 | 505:
        ElMessage({
          type: 'error',
          message: '服务器挂了',
        })
        break
      case 401:
        ElMessage({
          type: 'error',
          message: '参数有误',
        })
        break
    }
    return Promise.reject(new Error(error.message))
  },
)

export default request
