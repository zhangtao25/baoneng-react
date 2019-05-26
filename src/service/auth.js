import axios from 'axios'
import {message} from 'antd'

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

function login(user_email, user_password) {
  return new Promise((resolve, reject) => {
    let req = {
      user_email,
      user_password
    };
    axios.post("/api/auth/login", req).then((res) => {
      window.isLogin = true
      resolve(res.data)
    }, res => {
      message.error(res.response.data.msg)
    })
  })
}

function reg(user_email, user_password,user_vcode) {
  return new Promise((resolve, reject) => {
    let req = {
      user_email,
      user_password,
      user_vcode
    };
    axios.post("/api/auth/reg", req).then((res) => {
      resolve(res.data)
    }, res => {
      message.error(res.response.data.msg)
    })
  })
}

function getVcode(user_email) {
  return new Promise((resolve, reject) => {
    let req = {
      user_email,
    };
    axios.get("/api/auth/vcode", {params: req}).then((res) => {
      resolve(res.data)
    }, res => {
      message.error(res.response.data.msg)
    })
  })
}

function autoLogin() {
  return new Promise((resolve, reject) => {
    // if (localStorage.getItem('user_email')){
      let req = {
        user_email: localStorage.getItem('user_email'),
        token: localStorage.getItem('token')
      };
      axios.post("/api/auth/token", req).then((res) => {
        resolve(res.data)
      },res => {
        message.error(res.response.data.msg)
      })
    // }
  })
}

export default {
  login,
  reg,
  autoLogin,
  getVcode
}
