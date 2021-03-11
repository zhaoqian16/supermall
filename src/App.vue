<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from 'components/contents/mainTabbar/mainTabbar'

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
  #app {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
</style>
