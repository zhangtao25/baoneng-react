import axios from 'axios'
import ErrorHandler from './../common/error-handler'

// http request 拦截器
axios.interceptors.request.use(
    config => {
      if (localStorage.getItem('token')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = localStorage.getItem('user_email')+" "+
            localStorage.getItem('token')
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    });

function getUserinfo() {
  return new Promise((resolve, reject)=>{
    axios.get("/api/userinfo/test").then((res) => {
      resolve(res.data)
    },res=>{
      // ErrorHandler.restApiErrorHandler(res,reject)
    })
  })
}
function updateUserCover(req) {
  return new Promise((resolve, reject)=>{
    axios.post("/api/userinfo/usercover",{usercover:req}).then((res) => {
      resolve(res.data)
    },res=>{
      // ErrorHandler.restApiErrorHandler(res,reject)
    })
  })
}

function updateUserAvatar(req) {
  return new Promise((resolve, reject)=>{
    axios.post("/api/userinfo/useravatar",{useravatar:req}).then((res) => {
      resolve(res.data)
    },res=>{
      // ErrorHandler.restApiErrorHandler(res,reject)
    })
  })
}

export default {
  getUserinfo,
  updateUserCover,
  updateUserAvatar
}
