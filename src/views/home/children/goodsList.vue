<template>
  <div class="goodslist">
    <GoodListItem v-for="(item, index) in goods" :key="index" :good="item"></GoodListItem>
  </div>
</template>

<script>
import GoodsListItem from './goodsListItem'

export default {
  name: 'goodsList',
  props: {
    goods: {
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