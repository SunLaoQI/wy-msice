<template>
  <div class="songSheetComment"
       v-loading="loading">
    <!-- 歌单评论 -->
    <textarea></textarea>
    <div class="box">
      <div class="iconBox">
        <i>😊</i>
        <i>@</i>
        <i>#</i>
      </div>
      <el-button round
                 style="margin-left: 86%">评论</el-button>
    </div>

    <!-- 精彩评论 -->
    <div class="marvellous">
      <p class="title">精彩评论</p>
      <div class="hotUserBox"
           v-for="(data,index) in hotComments"
           :key="index">
        <img :src="data.user.avatarUrl">
        <div class="content">
          <p class="name">{{data.user.nickname}}:<span>{{data.content}}</span></p>
          <p class="time">{{creationTime[index]}}</p>
        </div>
      </div>
      <div class="btnComment">
        <el-button round>更多精彩评论<i class="el-icon-arrow-right"></i></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getsongSheetComment } from "@/api/songDetails";
import { formatDate } from "@/timeStamp";
export default {
  name: "songSheetComment",
  props: {
    songSheetId: Number
  },
  data () {
    return {
      hotComments: [],
      creationTime: [],
      loading: true
    }
  },
  mounted () {
    getsongSheetComment(this.songSheetId).then(res => {
      this.hotComments = res.data.hotComments.slice(0, 10);
      this.hotComments.forEach(item => {
        this.creationTime.push(formatDate(item.time).slice(0, 16));
      })
      this.loading = false;
    })
  }
}
</script>

<style scoped>
.songSheetComment {
  width: 100%;
  height: 100%;
}
.songSheetComment textarea {
  margin: 3% 0 1% 0;
  resize: none;
  outline: none;
  width: 100%;
  height: 80px;
  border-color: #ccc;
  border-radius: 6px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.6);
  padding-left: 1%;
}
.box {
  display: flex;
}
.iconBox {
  display: flex;
}
.iconBox i {
  margin: 0 10%;
}
.title {
  font-weight: 600;
}
.hotUserBox {
  display: flex;
  padding: 2% 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.hotUserBox img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1.5%;
  cursor: pointer;
}
.content {
  font-size: 14px;
}
.name {
  color: #507daf;
  cursor: pointer;
  padding-bottom: 5px;
}
.name:hover {
  color: #0b57ad;
}
.name span {
  color: rgba(0, 0, 0, 0.8);
  padding-left: 10px;
  cursor: auto;
}
.time {
  color: rgba(0, 0, 0, 0.5);
}
.btnComment {
  width: 25%;
  margin: 2% auto;
}
</style>