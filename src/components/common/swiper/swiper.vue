<template>
  <div class="hy-swiper">
    <div class="swiper" ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>

    <slot name="indicator">
    </slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: currentIndex-1 === index}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    showIndicator: {
      type: Boolean,
      default: true
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    animDuration: {
      type: Number,
      default: 300
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      currentIndex: 1,
      timer: null,
      startX: '',
      totalWidth: 400,
      slideCount: '',
      siwperStyle: null,
      scrolling: false
    }
  },
  mounted() {
    
    setTimeout(() => {
      this.handleDom()
      this.startTimer()
    }, 3000)
    
  },
  methods: {
    /**
     * @description: 设置定时器，对图片轮播
     * @param {*}
     * @return {*}
     */
    startTimer() {
      this.timer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },
    /**
     * @description: 停止图片轮播
     * @param {*}
     * @return {*}
     */
    stopTimer() {
      window.clearInterval(this.timer)
      this.timer = null
    },
    /**
     * @description: 滑动开始的触发事件--停止定时器并记录开始滑动的位置
     * @param {*} e
     * @return {*}
     */
    touchStart (e) {
      this.stopTimer()
      this.startX = e.targetTouches[0].pageX
    },
    /**
     * @description: 滑动的触发事件--判断滑动距离并swiper移动到对应位置
     * @param {*} e
     * @return {*}
     */
    touchMove(e) {
      // 判断滑动的距离
      this.currentX = e.targetTouches[0].pageX
      this.distance = this.currentX - this.startX
      let currentPosition = - this.currentIndex * this.totalWidth
      let moveDistance = currentPosition + this.distance
      // 移动到对应位置
      this.setTransform(moveDistance)
    },
    /**
     * @description: 滑动结束的触发事件--判断滑动距离，确定是否可进入下一页，并滚动到对应位置
     * @param {*}
     * @return {*}
     */
    touchEnd() {
      // 判断滑动的距离
      let currentMove = Math.abs(this.distance)

      // 根据滑动距离确定是否进入下一页/上一页，判断最终距离
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex++
      }

      // 移动到正确位置
      this.scrollContent(-this.currentIndex * this.totalWidth)
      // 开启计时器
      this.startTimer()
    },
    /**
     * @description: 处理dom元素相关的操作
     * @param {*}
     * @return {*}
     */
    handleDom() {
      let swiperEl = document.querySelector('.swiper')
      let slideEls = swiperEl.getElementsByClassName('slide')

      this.slideCount = slideEls.length

      if (this.slideCount > 1) {
        let firstClone = slideEls[0].cloneNode(true)
        let lastClone = slideEls[this.slideCount-1].cloneNode(true)
        swiperEl.appendChild(firstClone) // 第一张图片复制插入到最后
        swiperEl.insertBefore(lastClone, slideEls[0]) // 最后一张图片复制插入到开始
        this.totalWidth = swiperEl.offsetWidth
        this.siwperStyle = swiperEl.style
      }

      this.setTransform(-this.totalWidth)
    },
    /**
     * @description: 移动到设定的位置
     * @param {*} position
     * @return {*}
     */
    setTransform(position) {
      this.siwperStyle.transform = `translate3d(${position}px, 0, 0)`
      this.siwperStyle['-webkit-transform'] = `translate3d(${position}px, 0, 0)`
      this.siwperStyle['-ms-transform'] = `translate3d(${position}px, 0, 0)`
    },
    /**
     * @description: 检验正确的位置
     * @param {*}
     * @return {*}
     */
    checkPosition() {
      window.setTimeout(() => {
        this.siwperStyle.transition = '0ms'
        // 校验正确的位置
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1
        } else if (this.currentIndex < 1) {
          this.currentIndex = this.slideCount
        }
        // 移动设定的位置
        this.setTransform(-this.currentIndex * this.totalWidth)
      }, this.animDuration)
      
    },
    /**
     * @description: 移动至正确的位置
     * @param {*} currentPosition
     * @return {*}
     */
    scrollContent(currentPosition) {
      this.scrolling = true

      this.siwperStyle.transition = `transform ${this.animDuration}ms`
      this.setTransform(currentPosition)
      this.checkPosition()

      this.scrolling = false
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