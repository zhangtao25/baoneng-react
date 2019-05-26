import axios from 'axios'
import ErrorHandler from './../common/error-handler'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token');
    let user_email = localStorage.getItem('user_email');
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = JSON.stringify({
        user_email:user_email,
        token:token
      });
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });
function getUserInfo() {
  return new Promise((resolve, reject)=>{
    axios.get("/api/user/basic").then((res) => {
      resolve(res.data)
    },res=>{
      ErrorHandler.restApiErrorHandler(res,reject)
    })
  })
}
function updateUser(req) {
  return new Promise((resolve, reject)=>{
    axios.post("/api/user/update",req).then((res) => {
      resolve(res.data)
    },res=>{
      // ErrorHandler.restApiErrorHandler(res,reject)
    })
  })
}

export default {
  getUserInfo,
  updateUser
}
