<template>
  <div class="detail-swiper">
    <Swiper>
      <SwiperItem v-for="(item, index) in topImages"
                  :key="index">
        <img :src="item" @load="imgLoad">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/swiper'
import SwiperItem from 'components/common/swiper/swiperItem'
export default {
  name: 'detailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$
    }
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>