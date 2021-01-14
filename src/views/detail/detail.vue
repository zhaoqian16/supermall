<template>
  <div>
    <h1>{{ iid }}</h1>
  </div>
</template>

<script>
import { getDetailData } from 'network/detail'
export default {
  name: 'detail',
  data() {
    return {
      iid: '',
    }
  },
  created() {
    this.iid = this.$route.query.iid
    this._getDetailData()
  },
  methods: {
    _getDetailData() {
      getDetailData(this.iid)
        .then(res => {
          // 整理数据
        })
    }
  }
}
</script>

<style scoped>

</style>