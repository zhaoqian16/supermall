import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    add_to_cart(state, product) {
      state.cartList.push(product)
    },
    increment_count(state, index) {
      state.cartList[index].count += 1
    },
    check_change(state, index) {
      state.cartList[index].checked = !state.cartList[index].checked
    }
  },
  getters: {
    totalLength(state, getters) {
      return state.cartList.filter(item => item.checked).length
    },
    cartList(state, getters) {
      return state.cartList
    }
  },
  actions: {
    addToCart({state, commit}, product)  {
      return new Promise((resolve, reject) => {
        let oldProduct = state.cartList.find(item => item.iid === product.iid)
        if (oldProduct) {
          let index = state.cartList.indexOf(oldProduct)
          commit("increment_count", index)
          resolve("购物车+1")
        } else {
          product.count = 1
          product.checked = false
          commit("add_to_cart", product)
          resolve("添加到购物车")
        }
      })
    },
    checkChange({state, commit}, product) {
      let index = state.cartList.indexOf(product)
      commit("check_change", index)
    }
  },
  modules: {
    
  }
})

export default store