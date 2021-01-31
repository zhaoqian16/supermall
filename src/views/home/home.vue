<template>
  <div id="home">
    <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
    <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="topTab" class="fixed" v-show="isFixed"></TabControl>
    <Scroll class="home-content" 
            ref="homeScroll" 
            :probType="1"
            :pullUpLoad="true"
            @loadMore="loadMore" 
            @getScroll="getScroll">
      <HomeSwiper :banner="banner" @loadImageForTab="loadImageForTab"></HomeSwiper>
      <FeatureView :features="recommend"></FeatureView>
      <RecommendView @loadImageForTab="loadImageForTab"></RecommendView>
      <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="currentTab"></TabControl>
      <GoodsList :goodsList="goods[currentType].list"></GoodsList>
    </Scroll>
    <BackTop class="home-back-top" @backTop="backTop" v-if="showBackTop"></BackTop>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import Scroll from 'components/common/scroll/scroll'

import TabControl from 'components/contents/tabControl/tabControl'
import GoodsList from 'components/contents/goodsList/goodsList'
import BackTop from 'components/contents/backTop/backTop'

import HomeSwiper from './children/homeSwiper'
import FeatureView from './children/featureView'
import RecommendView from './children/recommendView'


import { getMultiData, getProductData } from 'network/home'

import { debounce } from 'common/utils'
import { itemListenerMixIn } from 'common/mixin'

export default {
  name: 'home',
  components: {
    Navbar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    FeatureView,
    RecommendView
  },
  data () {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      showBackTop: false,
      currentScrollY: 0,
      tabPos: '',
      isFixed: false,
    }
  },
  mixins: [itemListenerMixIn],
  created() {
    this.getMultiData()
    this.getProductData('pop')
    this.getProductData('new')
    this.getProductData('sell')
  },
  mounted() {
  },
  activated() {
    this.$refs.homeScroll && this.$refs.homeScroll.scrollTo(0, this.currentScrollY)
  },
  deactivated() {
    this.currentScrollY = this.$refs.homeScroll.getScrollY()
    this.$bus.$off('loadImage', this.loadImageListener)
  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banner = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list
      })
    },
    getProductData(type) {
      this.goods[type].page++
      getProductData(type, this.goods[type].page).then(res => {
        this.goods[type].list.push(...res.data.list)
      })
    },
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2: 
          this.currentType = 'sell'
          break
      }
      this.$refs.topTab.currentIndex = index
      this.$refs.currentTab.currentIndex = index
    },
    refresh() {
      this.$refs.homeScroll && this.$refs.homeScroll.refresh()
    },
    loadMore() {
      this.getProductData(this.currentType)
      this.$refs.homeScroll && this.$refs.homeScroll.finishPullUp()
    },
    backTop() {
      this.$refs.homeScroll.scrollTo(0, 0, 200)
    },
    getScroll(pos) {
      this.showBackTop = pos < -1000 ? true : false
      this.isFixed = pos < -this.tabPos ? true : false
    },
    loadImageForTab() {
      this.tabPos = this.$refs.currentTab.$el.offsetTop - this.$refs.homeScroll.$el.offsetTop
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 10;
}
.home-content {
  height: calc(100% - 93px);
}
.home-back-top {
  position: absolute;
  right: 5px;
  bottom: 45px;
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 9;
}
</style>