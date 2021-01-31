<template>
  <div>
    <Navbar class="detail-navbar">
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="back">
      </div>
      <div slot="center" >
        <div class="title">
          <div v-for="(item, index) in titles" class="title-item"
               :class="{active: currentIndex === index}"
               @click="titleClick(index)">{{ item }}</div>
        </div>
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
export default {
  name: 'detailNavbar',
  components: {
    Navbar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.back {
  padding-top: 12px;
}
.title {
  display: flex;
  font-size: 14px;
  color: #666;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text)
}
</style>