<template>
  <div class="cart-list">
    <CartListItem v-for="(item, index) in cartList"
                  :key="index"
                  :itemInfo="item"></CartListItem>
  </div>
</template>

<script>
import CartListItem from './cartListItem'
export default {
  name: "cartList",
  components: {
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>