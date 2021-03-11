<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="bar-left-item">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="bar-left-item">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="bar-left-item">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>

    <div class="bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  data() {
    return {

    }
  },
  methods: {
    addCart() {
      this.$emit("addToCart")
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 58px;
  position: absolute;
  bottom: 0;
  background: #fff;
  z-index: 88;
  display: flex;
  text-align: center;
}

.bar-left {
  width: 50%;
  display: flex;
}

.bar-left .bar-left-item {
  flex: 1;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 0;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  
}
.bar-left .text {
  font-size: 13px;
  color: #666;
}

.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right {
  flex: 1;
  display: flex;
  line-height: 55px;
}

.bar-right .cart {
  flex: 1;
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  flex: 1;
  background-color: var(--color-tint);
  color: #fff;
}
</style>