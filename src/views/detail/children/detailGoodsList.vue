<template>
  <div class="recommend" v-if="recommend.length>0">
  <GoodsList :goodsList="recommend"></GoodsList>
  </div>
</template>

<script>
import GoodsList from 'components/contents/goodsList/goodsList'

export default {
  name: 'detailGoodsList',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsList
  }
}
</script>

<style scoped>
.recommend {
  margin-top: 15px;
}
</style>