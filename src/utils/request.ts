import axios from 'axios'
const { baseURL } = require('../../config')

const service = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.data = config.data || {}

    if (config.data.custom) {
      //
    }

    return config
  },
  error => {
    // 网络请求时，出现错误的情况
    console.log('request error ', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    let responseData = response.data

    if (typeof responseData === 'string') {
      // 处理某些接口返回为非json字符串时，导致json解析报错
      try {
        responseData = JSON.parse(responseData)
      } catch (error) {
        responseData = {
          msg: responseData,
        }
      }
    }

    const { code: code, msg: message } = responseData

    return responseData
  },
  error => {
    // 网络请求后，Status Code 不为 2XX 的情况
    console.log('response error', error)
    return Promise.reject(error)
  }
)


export default service
