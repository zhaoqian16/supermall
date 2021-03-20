<template>
  <Scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item" 
          v-for="(item, index) in categories"
          :class="{'active': index === currentIndex}"
          @click="menuClick(index)">
          {{ item.title}}
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from 'components/common/scroll/scroll'

export default {
  name: "tabMenu",
  components: {
    Scroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    menuClick(index) {
      this.currentIndex = index
      this.$emit("selectItem", index)
    }
  }
}
</script>

<style scoped>
#tab-menu {
  width: 100px;
  color: #666;
  background: #f6f6f6;
  font-size: 14px;
}
.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.active {
  border-left: 3px solid var(--color-tint);
  background: #ffffff;
}
</style>