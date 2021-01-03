import { hasOwnMetadata } from "core-js/fn/reflect";
import { request } from './network'

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getProductData() {
  return request({
    url: '/home/data'
  })
}