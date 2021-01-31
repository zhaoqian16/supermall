import { debonce } from './utils'

export const itemListenerMixIn = {
  data() {
    return {
      loadImageListener: null
    }
  },
  mounted() {
    const refresh = debonce(this.refresh)
    this.loadImageListener = function () {
      refresh()
    }
    this.$bus.$on('loadImage', this.loadImageListener)
  }
}