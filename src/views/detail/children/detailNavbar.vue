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
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐']
    }
  },
  methods: {
    titleClick(index) {
      this.$emit("titleClick", index)
    },
    backClick() {
      this.$router.back()
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