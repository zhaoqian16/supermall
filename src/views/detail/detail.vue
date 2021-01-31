<template>
  <div class="detail">
    <DetailNavbar class="detail-nav"></DetailNavbar>
    <Scroll class="detail-content" 
            ref="detailScroll"
            :pullUpLoad="true">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
      <DetailParamInfo :params="params"></DetailParamInfo>
      <DetailCommentInfo :comments="comments"></DetailCommentInfo>
      <DetailGoodsList :recommend="recommend"></DetailGoodsList>
    </Scroll>
  </div>
</template>

<script>
import { getDetailData, Goods, Shop, getRecommend } from 'network/detail'
import { debounce } from 'common/utils'
import { itemListenerMixIn } from 'common/mixin'

import Scroll from 'components/common/scroll/scroll'

import DetailNavbar from './children/detailNavbar'
import DetailSwiper from './children/detailSwiper'
import DetailBaseInfo from './children/detailBaseInfo'
import DetailShopInfo from './children/detailShopInfo'
import DetailGoodsInfo from './children/detailGoodsInfo'
import DetailParamInfo from './children/detailParamInfo'
import DetailCommentInfo from './children/detailCommentInfo'
import DetailGoodsList from './children/detailGoodsList'

export default {
  name: 'detail',
  components: {
    Scroll,
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailGoodsList
  },
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      params: {},
      comments: [],
      recommend: []
    }
  },
  mixins: [itemListenerMixIn],
  created() {
    this.iid = this.$route.query.iid
    this._getDetailData()
    this._getRecommend()
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('loadImage', this.loadImageListener)
  },
  methods: {
    _getDetailData() {
      getDetailData(this.iid)
        .then(res => {
          // 整理数据
          var data = res.result
          console.log(data)
          this.topImages = data.itemInfo.topImages
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          this.shop = new Shop(data.shopInfo)
          this.detailInfo = data.detailInfo
          this.params = data.itemParams
          this.comments = data.rate.list
        })
    },
    _getRecommend() {
      getRecommend()
        .then(res => {
          this.recommend = res.data.list
        })
    },
    refresh() {
      this.$refs.detailScroll && this.$refs.detailScroll.refresh()
    }

  }
}
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
}
.detail-nav {
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.detail-content {
  position: absolute;
  top: 44px;
  bottom: 0;
  background: #fff;
  z-index: 8;
}
</style>