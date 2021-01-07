<template>
  <div class="feature">
    <div class="feature-item" v-for="(item, index) in features" :key="index">
      <img :src="item.image" alt="">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'featureView',
  props: {
    features: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.feature {
  display: flex;
  justify-content: space-between;
  margin: 10px 5px;
  font-size: 14px;
  color: #666666;
}
.feature-item img {
  width: 80px;
  border-radius: 50%;
  padding-bottom: 5px;
}
.feature-item span {
  display: block;
  text-align: center;
}
</style>