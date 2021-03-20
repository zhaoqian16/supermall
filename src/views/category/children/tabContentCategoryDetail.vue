<template>
  <div>
    <GridView :cols="2">
      <GoodsListItem v-for="(item, index) in categoryDetail"
                     :key="index"
                     :goodsItem="item"></GoodsListItem>
    </GridView>
  </div>
</template>

<script>
import GridView from 'components/common/gridView/gridView'
import GoodsListItem from 'components/contents/goodsList/goodsListItem'

export default {
  name: 'tabContentCategoryDetail',
  components: {
    GridView,
    GoodsListItem
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

