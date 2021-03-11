<template>
  <div class="bottom-menu">
    <CheckButton class="menu-check-button" :checked="selectAll" @checkButtonClick="selectAllClick"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计：¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{totalLength}})</span>
  </div>
</template>

<script>
import CheckButton from './checkButton';
import { mapGetters } from "vuex";

export default({
  name: 'cartBottomMenu',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList", "totalLength"]),
    totalPrice() {
      return this.cartList.filter(item => item.checked).reduce((prev, current) => {
        return prev + current.price * current.count
      }, 0).toFixed(2)
    },
    selectAll() {
      return this.cartList.filter(item => !item.checked).length === 0
    }
  },
  methods: {
    selectAllClick() {
      let isSelectAll = !this.selectAll
      if (isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = true)
      } else {
        this.$store.state.cartList.forEach(item => item.checked = false)
      }
    }
  }
})
</script>

<style scoped>
.bottom-menu {
  height: 44px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  line-height: 44px;
  padding-left: 35px;
  color: #888;
  background: #eee;
  font-size: 14px;
}
.menu-check-button {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
  line-height: 0;
}
.total-price {
  color: #666;
  font-size: 16px;
  margin-left: 10px;
}
.buy-product {
  display: inline-block;
  width: 100px;
  height: 100%;
  text-align: center;
  float: right;
  background: #ff4500;
  color: #ffffff;
}
</style>