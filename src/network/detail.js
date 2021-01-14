import { requestCharge } from './network'

export function getDetailData(iid) {
  return requestCharge({
    url: '/detail',
    params: {
      iid
    }
  })
}