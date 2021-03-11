import { debounce } from './utils'
import BackTop from 'components/contents/backTop/backTop'

export const itemListenerMixIn = {
  data() {
    return {
      loadImageListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.refresh)
    this.loadImageListener = function () {
      refresh()
    }
    this.$bus.$on('loadImage', this.loadImageListener)
  }
}

// 混装后报错======待解决
// export const backTopMinIn = {
//   components: {
//     BackTop
//   },
//   data() {
//     return {
//       showBackTop: false
//     }
//   },
//   methods: {
//     backTop() {
//       this.$refs.scroll.scrollTo(0, 0, 200)
//     }
//   }
// }