<template>
  <div class="hy-swiper">
    <div class="swiper" ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>

    <div class="indicator">
      <slot name="indicator" v-if="totalCount > 1">
        <div v-for="item in totalCount" class="indi-item" :class="{active: currentIndex === item-1}"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper',
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
      currentIndex: 0,
      timer: null,
      startX: '',
      totalWidth: 400,
      totalCount: 4
    }
  },
  mounted() {
    // this.$refs.swiper.style.transform = "translate(-400px, 0)"
    // this.$refs.swiper.style.-ms-transform = "translate(-400px, 0)"
    // this.$refs.swiper.style.-webkit-transform = "translate(-400px, 0)"
    this.startTimer()
  },
  methods: {
    // 实现可向左、向右滑动
    // 设定计时器，自动播放
    // 随着播放，改变indicator的cuurentIndex
    startTimer() {
      this.timer = window.setInterval(() => {
        this.currentIndex++
        if (this.currentIndex > this.banner.length - 1) {
          this.currentIndex = 0
        } else if (this.currentIndex < 0) {
          this.currentIndex = this.banner.length - 1
        }
        this.$refs.swiper.style.transform = `translate(${-400*this.currentIndex}px, 0)`
      }, 2000)
    },
    clearTimer() {
      window.clearInterval(this.timer)
      this.timer = null
    },
    touchStart (e) {
      this.clearTimer()
      this.startX = e.targetTouches[0].pageX
      
    },
    touchMove(e) {
      // 判断滑动的距离
      this.currentX = e.targetTouches[0].pageX
      this.distance = this.currentX - this.startX
      let currentPosition = - this.currentIndex * this.totalWidth
      let moveDistance = currentPosition + this.distance
      // 设置页面移动的位置
      this.$refs.swiper.style.transform = `translate(${moveDistance}px, 0)`
    },
    touchEnd() {
      // 判断滑动的距离
      // 如果滑动距离超过阈值，滚动至下一页
      // 如果滑动距离小于阈值，滚动至本页
    }
  }
}
</script>

<style scoped>
.hy-swiper {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
}
.indi-item {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  margin: 0 5px;
}
.active {
  background: #d43e2e;
}
</style>