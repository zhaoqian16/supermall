<template>
  <div>
    <div class="check-button" :class="{'check-active': value}" @click="checkButtonClick">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "checkButton",
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: this.checked
    }
  },
  methods: {
    checkButtonClick() {
      this.$emit("checkButtonClick")
    }
  },
  watch: {
    checked(newValue) {
      this.value = newValue
    }
  }
}
</script>

<style>
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer;
}
.check-button img {
  height: 100%;
  border-radius: 50%;
}
.check-active {
  border-color: var(--color-tint);
  background: var(--color-tint);
}
</style>