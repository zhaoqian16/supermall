import { requestCharge } from './network'

export function getDetailData(iid) {
  return requestCharge({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return requestCharge({
    url: '/recommend'
  })
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title,
    this.desc = itemInfo.desc,
    this.price = itemInfo.price,
    this.oldPrice = itemInfo.oldPrice,
    this.discount = itemInfo.discountDesc,
    this.discountColor = itemInfo.discountBgColor,
    this.columns = columns,
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.fans = shopInfo.cFans
    this.score = shopInfo.score
  }
}