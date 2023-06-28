<<<<<<< HEAD
import axios from "axios";

//@ts-ignore
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: "",
  timeout: 5000,
});

//请求拦截器
request.interceptors.request.use((config) => {
  return config;
});

//响应拦截器
request.interceptors.response.use(
  (response) => {
    //响应拦截器成功的回调,一般会进行简化数据
    return response.data;
  },
  (error) => {
    //处理http网络错误
    let status = error.response.status;
    switch (status) {
      case 404:
        //错误提示信息
        ElMessage({
          type: "error",
          message: "请求失败路径出现问题",
        });
        break;
      case 500 | 501 | 502 | 503 | 504 | 505:
        ElMessage({
          type: "error",
          message: "服务器挂了",
        });
        break;
      case 401:
        ElMessage({
          type: "error",
          message: "参数有误",
        });
        break;
    }
    return Promise.reject(new Error(error.message));
  }
);

export default request;
=======
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
>>>>>>> 59a142cbc9ccb5507d66fb88d8826d9299a65ce9
