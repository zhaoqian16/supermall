<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" :key="index" class="tabcontrol-item" :class="{active: currentIndex === index}" @click="tabClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tabcontrol {
  display: flex;
  justify-content: space-between;
}
.tabcontrol-item span{
  display: inline-block;
  padding: 5px;
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
  color: var(--color-high-text);
}
</style>