<template>
  <div id="home">
    <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
    <div class="main">
      <HomeSwiper :banner="banner"></HomeSwiper>
      <FeatureView :features="recommend"></FeatureView>
      <RecommendView></RecommendView>
      <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick"></TabControl>
      <GoodsList :goodsList="goods[currentType].list"></GoodsList>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import TabControl from 'components/contents/tabControl/tabControl'
import GoodsList from 'components/contents/goodsList/goodsList'
import HomeSwiper from './children/homeSwiper'
import FeatureView from './children/featureView'
import RecommendView from './children/recommendView'


import { getMultiData, getProductData } from 'network/home'

export default {
  name: 'home',
  components: {
    Navbar,
    HomeSwiper,
    FeatureView,
    RecommendView,
    TabControl,
    GoodsList
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
      currentType: 'pop'
    }
  },
  created() {
    this.getMultiData()
    this.getProductData('pop')
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
    }
  }
}
</script>

<style scoped>
#home {
  position: relative
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.main {
  padding-top: 44px;
}


</style>