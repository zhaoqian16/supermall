<template>
  <div class="detail">
    <DetailNavbar class="detail-nav" @titleClick="titleClick" :currentIndex="currentIndex"></DetailNavbar>
    <Scroll class="detail-content" 
            ref="detailScroll"
            :pullUpLoad="true"
            :probeType="3"
            @getScroll="getScroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
      <DetailParamInfo :params="params" ref="params"></DetailParamInfo>
      <DetailCommentInfo :comments="comments" ref="comments"></DetailCommentInfo>
      <DetailGoodsList :recommend="recommend" ref="recommend"></DetailGoodsList>
    </Scroll>
    <BackTop class="detail-backtop" @backTop="detailBackTop" v-if="showBackTop"></BackTop>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
  </div>
</template>

<script>
import { getDetailData, Goods, Shop, getRecommend } from 'network/detail'
import { debounce } from 'common/utils'
import { itemListenerMixIn } from 'common/mixin'

import Scroll from 'components/common/scroll/scroll'
// import Toast from 'components/common/toast/toast.vue'

import BackTop from 'components/contents/backTop/backTop'

import DetailNavbar from './children/detailNavbar'
import DetailSwiper from './children/detailSwiper'
import DetailBaseInfo from './children/detailBaseInfo'
import DetailShopInfo from './children/detailShopInfo'
import DetailGoodsInfo from './children/detailGoodsInfo'
import DetailParamInfo from './children/detailParamInfo'
import DetailCommentInfo from './children/detailCommentInfo'
import DetailGoodsList from './children/detailGoodsList'
import DetailBottomBar from './children/detailBottomBar'

import { mapActions } from 'vuex'

export default {
  name: 'detail',
  components: {
    Scroll,
    BackTop,
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailGoodsList,
    DetailBottomBar
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
      recommend: [],
      themeTopY: [],
      currentIndex: 0,
      showBackTop: false,
      message: "",
      isShow: false
    }
  },
  created() {
    this.iid = this.$route.query.iid
    this._getDetailData()
    this._getRecommend()
  },
  mixins: [itemListenerMixIn],
  mounted() {
    // const refresh = debounce(this.refresh)

    // this.$bus.$on("loadImage", function() {
    //   refresh()
    // })
  },
  destroyed() {
    this.$bus.$off('loadImage', this.loadImageListener)
  },
  methods: {
    ...mapActions({
      add: "addToCart"
    }),
    _getDetailData() {
      getDetailData(this.iid)
        .then(res => {
          // 整理数据
          var data = res.result
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
      // 获取对应主题的顶部高度
      this.themeTopY = []
      this.themeTopY[0] = 0
      this.themeTopY[1] = this.$refs.params ? this.$refs.params.$el.offsetTop : undefined
      this.themeTopY[2] = this.$refs.params ? this.$refs.comments.$el.offsetTop :  undefined
      this.themeTopY[3] = this.$refs.params ? this.$refs.recommend.$el.offsetTop : undefined
      this.themeTopY[4] = Number.POSITIVE_INFINITY

      this.$refs.detailScroll && this.$refs.detailScroll.refresh()
    },
    titleClick(index) {
      this.$refs.detailScroll.scrollTo(0, -this.themeTopY[index], 200)
    },
    getScroll(y) {
      for (let i in this.themeTopY) {
        i = parseInt(i)
        if (this.currentIndex !== i) {
          // 写法1
          // if ((i < this.themeTopY.length-1 && -y >= this.themeTopY[i] && -y < this.themeTopY[i+1]) || 
          //     (i === this.themeTopY.length-1 && -y >= this.themeTopY[i])) {
          //   this.currentIndex = i
          //   console.log(this.currentIndex)
          // }
          
          // 写法二，在themeTopY数组中添加 Number.POSITIVE_INFINITY
          if (i < this.themeTopY.length-1 && -y >= this.themeTopY[i] && -y < this.themeTopY[i+1]) {
            this.currentIndex = i
          }
        }
      }

      this.showBackTop = -y > 1000 ? true : false
    },
    detailBackTop() {
      this.$refs.detailScroll.scrollTo(0, 0, 0)
    },
    addToCart() {
      let product = {
        iid: this.iid,
        imgUrl: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.nowPrice
      }
      this.add(product).then(res => {
        // 方式一：封装前
        // this.$refs.toast.show(res, 3000)
        // 方式二：封装后
        this.$toast.show(res, 3000)
      })
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
  bottom: 58px;
  background: #fff;
  z-index: 8;
}
.detail-backtop {
  position: absolute;
  right: 10px;
  bottom: 60px;
  z-index: 10;
}
</style>