<template>
  <div id="home">
    <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'

import { getMultiData, getProductData } from 'network/home'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style scoped>
#home {
  position: relative
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>