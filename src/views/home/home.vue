<template>
  <div id="home">
    <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
    <div class="main">
      <HomeSwiper :banner="banner"></HomeSwiper>
      <FeatureView :features="recommend"></FeatureView>
      <TabControl titles="['精选', '流行', '喜欢']"></TabControl>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import TabControl from 'components/contents/tabControl/tabControl'
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
    TabControl
  },
  data () {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: []
    }
  },
  created() {
    this.getMultiData()
    // this.getProductData()
  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banner = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list
        console.log(res.data)
      })
    },
    getProductData() {
      getProductData().then(res => {
        console.log(res)
      })
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