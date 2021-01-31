<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="">
      <span class="title">{{ shop.name }}</span>
    </div>

    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shop.goods }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-right">
        <table>
          <tr v-for="item in shop.score">
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
            <td>{{ item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="in-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 15px 5px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  display: flex;

}
.shop-top img {
  width: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
}
.shop-top .title {
  margin-left: 10px;
  color: #666;
  line-height: 45px;
}
.shop-middle {
  display: flex;
  margin-top: 10px;
}

.shop-middle-left {
  flex: 1;
  border-right: 1px solid rgba(0,0,0,.1);
  display: flex;
  color: #333;
  /* justify-content: space-evenly; */
  text-align: center;
  margin: auto auto;
}
.info-sells, .info-goods {
  flex: 1;
}
.sells-count, .goods-count {
  font-size: 18px;
}

.sells-text, .goods-text {
  font-size: 12px;
  margin-top: 5px;
}

.shop-middle-right {
  flex: 1;
  text-align: center;
  font-size: 13px;
}
.shop-middle-right table {
  margin: auto auto;
}
.shop-middle-right table td {
  padding: 5px 8px;
}
.shop-bottom {
  margin-top: 10px;
}
.shop-bottom .in-shop {
  text-align: center;
  background: #f2f5f8;
  width: 150px;
  height: 30px;
  color: #666;
  line-height: 30px;
  border-radius: 10px;
  margin: auto auto;
}
</style>