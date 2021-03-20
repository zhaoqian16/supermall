import { requestCharge } from './network'

export function getCategory() {
  return requestCharge({
    url: "/category"
  })
}

export function getSubCategory(maitKey) {
  return requestCharge({
    url: "/subcategory",
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return requestCharge({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}