import axios from "axios";
import base from "./base";

const req = axios.create({
  baseURL: base.host,
  timeout: 5000,
});

// 请求拦截
req.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截
req.interceptors.response.use(
  (res) => {
    console.log(res);
    return res; // 返回响应对象
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default req;
