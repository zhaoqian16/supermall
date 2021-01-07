import { request, requestCharge } from './network'

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getProductData(type, page) {
  return requestCharge({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}