<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>

    <div class="info-s" v-if="comments.length>0">
      <div class="info-user">
        <img :src="comments[0].user.avatar" alt="">
        <span class="user-name">{{ comments[0].user.uname }}</span>
      </div>

      <div class="info-detail">
        <p>{{ comments[0].content }}</p>
        <div class="info-other">
          <span class="time">{{ comments[0].created | _formatDate }}</span>
          <span class="style">{{ comments[0].style }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'

export default {
  name: 'detailCommentInfo',
  props: {
    comments: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    _formatDate: function(value) {
      let dateObj = new Date(value*1000)
      return formatDate(dateObj, "yyyy-MM-dd")
    }
  }
}
</script>

<style scoped>
.comment-info {
  margin-top: 15px;
  color: #333;
  padding: 0 10px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.info-s {
  margin-top: 10px;
}
.info-user img {
  width: 45px;
  border-radius: 50%;
}
.info-user .user-name {
  position: relative;
  top: -16px;
  left: 10px;
  font-size: 15px;
}

.info-detail p {
  color: #777;
  line-height: 1.5;
  margin: 8px 0;
}

.info-other {
  font-size: 12px;
  color: #999;
}
.info-other .style {
  margin-left: 10px;
}
</style>