<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

</script>

<style scoped>
  .navbar {
    height: 44px;
    line-height: 44px;
    text-align: center;
    display: flex;
  }
  .left {
    width: 80px;
  }
  .center {
    flex: 1;
  }
  .right {
    width: 80px;
  }
</style>