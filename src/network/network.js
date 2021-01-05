import axios from 'axios'

export function request(options) {
  return new Promise((resolve, reject) => {
    var instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
  
    instance.interceptors.request.use(config => {
      return config
    })
  
    instance.interceptors.response.use(res => {
      return res.data
    })
  
    instance(options)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
  })
  
}