<template>
  <div class="params-info" v-if="Object.keys(params).length>0">
    <div class="info">
      <div class="info-key">{{ params.info.key }}</div>
      <table>
        <tr v-for="item in params.info.set">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="rule">
      <div class="rule-key">{{ params.rule.key }}</div>
      <table v-for="(table, index) in params.rule.tables" :key="index">
        <tr v-for="(row, indey) in table" :key="indey">
          <td v-for="(column, indez) in row" :key="indez">{{column}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailParamInfo',
  props: {
    params: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.params-info {
  color: #666;
  font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.params-info .info-key, .params-info .rule-key {
  color: #333;
  margin: 5px 0;
}
.params-info table .key {
  width: 70px;
}
.params-info table tr td {
  line-height: 30px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.rule table, .info table {
  width: 100%;
}
table {
  border-collapse: collapse;
}
</style>