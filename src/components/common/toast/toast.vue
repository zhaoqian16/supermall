<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      isShow: false,
      message: ""
    }
  },
  methods: {
    show(message, duration=2000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ""
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  padding: 8px 10px;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
</style>