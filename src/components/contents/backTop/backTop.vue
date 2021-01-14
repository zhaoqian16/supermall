<template>
  <div class="back-top" @click="topClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backTop',
  methods: {
    topClick() {
      this.$emit('backTop')
    }
  }
}
</script>

<style scoped>
.back-top img {
  width: 40px;
  border-radius: 50%;
}
</style>