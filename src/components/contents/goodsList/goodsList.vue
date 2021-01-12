<template>
  <div class="goods-list">
    <GoodsListItem v-for="(item, index) in goodsList" 
      :key="index" 
      :goodsItem="item" class="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './goodsListItem'

export default {
  name: 'goodsList',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  justify-content: space-between;
}
.goods-list .item {
  width: 49%;
}
</style>