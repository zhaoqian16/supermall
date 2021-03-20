<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probType: {
      type: Number,
      default: 1
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    scrollY() {
      return this.scroll && this.scroll.y
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: this.pullUpLoad,
      probeType: this.probType
    })
    
    this.scroll.on('pullingUp', () => {
      this.$emit('loadMore')
    })

    this.scroll.on('scroll', (e) => {
      this.$emit('getScroll', e.y)
    })
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo(x, y, time=100) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
</style>