<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home">
        <img src="~assets/img/tabbar/home.svg" slot="item-icon"></img>
        <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active"></img>
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category">
        <img src="~assets/img/tabbar/category.svg" slot="item-icon"></img>
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active"></img>
        <div slot="item-text">目录</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon"></img>
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active"></img>
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="item-icon"></img>
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active"></img>
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/tabbar'
import TabbarItem from 'components/common/tabbar/tabbarItem'

export default {
  name: 'mainTabbar',
  components: {
    Tabbar,
    TabbarItem
  }
} 
</script>