<template>
  <Swiper ref="home-swiper" v-if="banner.length">
    <SwiperItem v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadImage">
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
  data() {
    return {
      isLoaded: false
    }
  },
  methods: {
    // 该轮播图只获取一次高度
    loadImage() {
      if (!this.isLoaded) {
        this.$emit('loadImageForTab')
        this.isLoaded = true
      }
    }
  }
}
</script>

<style scoped>
</style>
