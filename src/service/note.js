import axios from 'axios'
import ErrorHandler from './../common/error-handler'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (window.gApp.$store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = JSON.stringify({
        user_phone:window.gApp.$store.state.user_phone,
        token:window.gApp.$store.state.token
      });
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

function upLoadNote(formData) {
  return new Promise((resolve, reject)=>{
    axios.post('/api/note/upload',formData).then(res=>{
      resolve(res)
    })
  })
}

export default {
  upLoadNote
}
