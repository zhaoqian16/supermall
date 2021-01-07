<template>
  <div class="recommend-view">
    <img src="~assets/img/home/recommend_bg.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'recommendView',
  props: {
    recommend: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.recommend-view img {
  width: 100%;
}
</style>