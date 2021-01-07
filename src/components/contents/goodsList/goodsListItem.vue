<template>
  <div class="goodslist-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <div class="title">{{ goodsItem.title }}</div>
      <div class="content">
        <span class="price">{{ goodsItem.price }}</span>
        <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodslistItem',
  props: {
    goodsItem: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.goodslist-item {
  position: relative;
  padding-bottom: 50px;
}
.goodslist-item img {
  width: 100%;
  vertical-align: bottom;
  color: #eee;
}
.goods-info {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
}
.goods-info .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .content {
  position: relative;
}
.goods-info .price {
  color: var(--color-high-text);
}
.goods-info .price::before {
  content: ' ';
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>