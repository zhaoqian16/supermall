<template>
  <div class="goods-list">
    <GoodsListItem v-for="(item, index) in goodsList" 
      :key="index" 
      :goodsItem="item"></GoodsListItem>
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
.goodslist {
  display: flex;
}
</style>