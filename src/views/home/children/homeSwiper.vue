<template>
  <Swiper ref="home-swiper" v-if="banner.length">
    <SwiperItem v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
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

  }
}
</script>

<style scoped>
</style>
