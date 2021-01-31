<template>
  <div v-if="Object.keys(goods).length > 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    
    <div class="info-price">
      <span class="n-price">{{ goods.price }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" :style="{ background: goods.discountColor }">{{ goods.discount }}</span>
    </div>

    <div class="info-other">
      <div v-for="i in goods.columns.length-1" class="other-item">{{ goods.columns[i-1] }}</div>
      <div class="other-item">{{ goods.services[goods.services.length-1].name }}</div>
    </div>

    <div class="info-service">
      <div v-for="i in goods.services.length-1" class="service-item">
        <img :src="goods.services[i].icon" alt="">
        <span>{{ goods.services[i-1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  margin: 10px 0 5px 0;
  padding: 0 5px;
  border-bottom: 5px solid #f2f5f8;
}
.info-price {
  margin: 10px 0 ;
}
.info-price .n-price {
  color: var(--color-high-text);
  font-size: 24px;
  font-weight: 700;
  padding-right: 5px;
}
.info-price .o-price {
  color: #666;
  font-size: 12px;
  text-decoration: line-through;
}
.info-price .discount {
  position: relative;
  left: 5px;
  top: -5px;
  font-size: 10px;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
}
.info-other {
  display: flex;
  font-size: 12px;
  color: #999;
  line-height: 30px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.other-item {
  flex: 1;
}
.info-service {
  display: flex;
  font-size: 13px;
  color: #333;
  padding: 20px 0;
}
.service-item {
  flex: 1
}
.service-item img {
  width: 14px;
  position: relative;
  top: 3px;
}
</style>