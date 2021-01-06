<template>
  <Swiper :banner="banner" ref="home-swiper">
    <SwiperItem v-for="(item, index) in banner" :key="index" @mouseover.native="mouseOver" @mouseout.native="mouseOut">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/swiper'
import SwiperItem from 'components/common/swiper/swiperItem'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    mouseOver (e) {
      console.log(this.$refs)
    },
    mouseOut (e) {
      
    }
  }
}
</script>

<style scoped>
</style>
