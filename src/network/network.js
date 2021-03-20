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

export function requestCharge(options) {
  return new Promise((resolve, reject) => {
    var instance = new axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeOut: 5000
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