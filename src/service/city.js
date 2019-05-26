import axios from 'axios'

function getAll() {
  return new Promise((resolve, reject)=>{
    axios.get("/api/city/getAll").then((res) => {
      resolve(res)
    })
  })
}

export default {
  getAll
}
