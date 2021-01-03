import { resolve } from "core-js/fn/promise";
import 'core-js/fn/promise'
import 'core-js/fn/reflect'
import axios from 'axios'


console.log(axios)

export function request(options) {
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

  return instance(options)
}