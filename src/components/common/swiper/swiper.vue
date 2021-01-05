<template>
  <div class="swiper-outer">
    <img v-for="item in banner" :src="item.image" class="swiper-item"></img>
    </img>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  }
}

</script>

<style scoped>
.swiper-item {
  width: 100%;
  float: left;
}
</style>