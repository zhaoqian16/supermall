import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
// 解决移动端的300ms延迟
FastClick.attach(document.body);
// 图片懒加载
Vue.use(VueLazyload, {
  loading: require("assets/img/common/placeholder.png")
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

