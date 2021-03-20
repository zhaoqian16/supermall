<template>
  <div>
    <GridView :cols="3" :lineSpace="15" :v-margin="20">
      <div v-for="(item, index) in subcategories.list" :key="index" class="item">
        <a :href="item.link">
          <img class="item-img" :src="item.image">
          <div class="item-title">{{item.title}}</div>
        </a>
      </div>
    </GridView>
  </div>
</template>

<script>
import GridView from 'components/common/gridView/gridView'
import GoodsListItem from 'components/contents/goodsList/goodsListItem'

export default {
  name: "tabContentCategory",
  components: {
    GridView,
    GoodsListItem
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.item {
  text-align: center;
  
}
.item-img {
  width: 80%;
}

.item-title {
  margin-top: 15px;
}
a {
  text-decoration: none;
  font-size: 12px;
  color: #666;
}
</style>