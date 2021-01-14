<template>
  <div class="goodslist-item">
    <img :src="goodsItem.show.img" alt="" @load="loadImage">
    <div class="goods-info">
      <div class="title">{{ goodsItem.title }}</div>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
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
  },
  methods: {
    loadImage() {
      this.$bus.$emit('loadImage')
    }
  }
}
</script>

<style scoped>
.goodslist-item {
  position: relative;
  padding-bottom: 40px;
  font-size: 12px;
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
  bottom: 5px;
  padding: 0 5px;
}
.goods-info .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 15px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>