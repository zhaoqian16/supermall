<template>
  <div class="category">
    <Navbar class="category-nav"><div slot="center">商品分类</div></Navbar>
    <div class="content">
      <TabMenu :categories="categories" @selectItem="selectItem"></TabMenu>
      <Scroll id="tab-content">
        <TabContentCategory :subcategories="showSubCategory"></TabContentCategory>
        <TabControl :titles="['综合', '新品', '销量']" @tabClick="tabClick"></TabControl>
        <TabContentCategoryDetail :categoryDetail="showCategoryDetail"></TabContentCategoryDetail>
      </Scroll>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import Scroll from 'components/common/scroll/scroll'

import TabControl from 'components/contents/tabControl/tabControl'

import TabMenu from './children/tabMenu'
import TabContentCategory from './children/tabContentCategory'
import TabContentCategoryDetail from './children/tabContentCategoryDetail'

import { getCategory, getSubCategory, getCategoryDetail } from 'network/category'

export default {
  name: 'category',
  components: {
    Navbar,
    Scroll,
    TabControl,
    TabMenu,
    TabContentCategory,
    TabContentCategoryDetail
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentType: 'pop'
    }
  },
  created() {
    this._getCategory()
  },
  computed: {
    showSubCategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        this.categories = res.data.category.list
        this.categories.forEach((item, index) => {
          this.categoryData[index] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        })
        this._getSubCategory(0)
      })
    },
    _getSubCategory(index) {
      let maitKey = this.categories[index].maitKey
      this.currentIndex = index
      getSubCategory(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this._getCategoryDetail("pop")
        this._getCategoryDetail("new")
        this._getCategoryDetail("sell")
      })
    },
    _getCategoryDetail(type) {
      let miniWallkey = this.categories[this.currentIndex].miniWallkey
      getCategoryDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    selectItem(index) {
      this._getSubCategory(index)
    },
    tabClick(index) {
      switch (index) {
        case 0: 
          this.currentType = "pop"
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    }
  }
}
</script>

<style scoped>
.category {
  width: 100%;
  height: 100vh;
  position: relative;
}
.category-nav {
  background: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.content {
  display: flex;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.content #tab-content {
  flex: 1;
}
</style>