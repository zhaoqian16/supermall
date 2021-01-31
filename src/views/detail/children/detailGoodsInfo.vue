<template>
  <div class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    
    <div v-for="item in detailInfo.detailImage">
      <div class="info-key">{{item.key}}</div>
      <img v-for="i in item.list" :src="i" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
 name: 'detailGoodsInfo',
 props: {
   detailInfo: {
     type: Object,
     default() {
       return {}
     }
   }
 },
 methods: {
  imgLoad() {
     this.$bus.$emit('loadImage')
   }
 }
}
</script>

<style scoped>
.info-desc {
  margin: 15px 10px;
  color: #666;
}
.start, .end {
  width: 90px;
  height: 1px;
  background: #a3a3a5;
  position: relative;
}
.info-desc .start {
  top: 0;
  left: 0
}
.info-desc .end {
  float: right;
  right: 0;
  bottom: 0;
}
.start::before, .end::after {
  content: " ";
  width: 5px;
  height: 5px;
  background: #333;
  position: absolute;
  bottom: 0;
}
.end::after {
  top: 0;
  right: 0;
}
.desc {
  padding: 15px 0;
}
.goods-info img {
  width: 100%;
}
.info-key {
  margin: 10px;
  font-size: 15px;
  color: #333;
}
.goods-info {
  padding-bottom: 10px;
  border-bottom: 5px solid #f2f5f8;
}
</style>