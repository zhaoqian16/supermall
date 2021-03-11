<template>
  <div class="cart">
    <Navbar class="cart-nav"><div slot="center">购物车(0)</div></Navbar>
    <Scroll :probType="1" class="cart-content">
      <CartList :cartList="$store.state.cartList"></CartList>
    </Scroll>
    <CartBottomMenu></CartBottomMenu>
    <!-- <div>{{$store.state.cartList}}</div> -->
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar';
import Scroll from 'components/common/scroll/scroll';

import CartList from './children/cartList';
import CartBottomMenu from './children/cartBottomMenu'


export default {
  name: "cart",
  components: {
    Navbar,
    Scroll,
    CartList,
    CartBottomMenu
  },

}
</script>

<style scoped>
.cart {
  height: 100vh;
  position: relative;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  position: relative;
  z-index: 10;
}
.cart-content {
  position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
}
</style>