import Toast from './toast'

const obj = {}

obj.install = function(Vue) {
  const construstor = Vue.extend(Toast)

  const toast = new construstor()

  toast.$mount(document.createElement("div"))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj