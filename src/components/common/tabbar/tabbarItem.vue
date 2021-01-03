<template>
    <div class="tabbar-item" @click="handleClick()">
        <div v-if="isActive">
            <slot name="item-icon-active"></slot>
        </div>
        <div v-else>
            <slot name="item-icon"></slot>
        </div>
        <div :class="{active: isActive}">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default({
    data () {
        return {

        }
    },
    computed: {
        isActive () {
            return this.path.includes(this.$route.path) ? true : false
        }
    },
    methods: {
        handleClick () {
            if (this.path === this.$route.path) return 
            this.$router.push(this.path)
        }
    },
    props: {
        path: String
    }
})
</script>

<style>
.tabbar-item {
    text-align: center;
    font-size: 12px;
    margin: auto auto;
}
.tabbar-item img {
    width: 22px;
    height: 22px;
    vertical-align: bottom;
}
.active {
    color: #e85274;
}
</style>