<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>

export default({

})
</script>

<style>
.tabbar {
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }


</style>