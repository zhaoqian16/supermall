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
  padding: 0 0 20px;
  font-size: 14px;
  color: #666666;
  margin:  10px 0;
  border-bottom: 8px solid #eee;
}
.feature-item {
  margin: 0 5px;
  flex: 1;
  text-align: center;
}
.feature-item img {
  width: 80px;
  border-radius: 50%;
  padding-bottom: 5px;
}
.feature-item span {
  display: block;
}
</style>