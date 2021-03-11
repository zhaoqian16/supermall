<template>
  <div class="cart-item" v-if="itemInfo">
    <CheckButton class="item-check" :checked="itemInfo.checked" @checkButtonClick="checkButtonClick"></CheckButton>
    <div class="item-left">
      <img :src="itemInfo.imgUrl" alt="">
    </div>

    <div class="item-right">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="item-bottom">
        <div class="price left">¥{{itemInfo.price}}</div>
        <div class="count right">X{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './checkButton'

import { mapActions } from 'vuex'

export default {
  name: "cartListItem",
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    ...mapActions(["checkChange"]),
    checkButtonClick() {
      this.checkChange(this.itemInfo)
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  padding: 10px 8px;
  border-bottom: 1px solid #ccc;
  color: #333;
  font-size: 17px;
}
.item-left img {
  height: 100px;
  border-radius: 5px;
  margin: 0 10px;
}
.item-right {
  overflow: hidden;
  position: relative;
}
.item-title, .item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-desc {
  font-size: 14px;
  color: #666;
  margin: 15px 0;
}
.item-bottom {
  font-size: 16px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  right: 5px;
}
.item-bottom .price {
  color: #ff0000;
}
.item-check {
  margin: auto auto;
}
</style>