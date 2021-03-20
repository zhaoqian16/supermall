<template>
  <div ref="gridView" class="grid-view">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gridView",
  props: {
    cols: {
      type: Number,
      default: 2
    },
    hMargin: {
      type: Number,
      default: 8
    },
    vMargin: {
      type: Number,
      default: 8
    },
    itemSpace: {
      type: Number,
      default: 8
    },
    lineSpace: {
      type: Number,
      default: 8
    }
  },
  mounted() {
    setTimeout(this._autoLayout, 200)
  },
  updated() {
    this._autoLayout()
  },
  methods: {
    _autoLayout() {
      let gridEl = this.$refs.gridView
      let children = gridEl.children

      // 设置padding
      gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`

      // 计算item的width
      let itemWidth = (gridEl.offsetWidth - 2 * this.hMargin - (this.cols-1)*this.itemSpace) / this.cols
      for (let i = 0; i < children.length; i++) {
        let item = children[i]
        item.style.width = itemWidth + "px"
        
        if ((i+1)%this.cols !== 0) {
          item.style.marginRight = this.hMargin + "px"
        }

        if (i >= this.cols) {
          item.style.marginTop = this.vMargin + "px"
        }
      }

    }
  }
}
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>