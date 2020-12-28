<template>
  <div class="broadcast"
       v-loading="loading">
    <!-- 独家放送 -->
    <p class="title">{{broadcastData.name}}<i class="el-icon-arrow-right" /></p>
    <div class="box">
      <div class="content"
           v-for="(data,index) in broadcastData.result"
           :key="index">
        <img :src="data.picUrl">
        <p class="name">{{data.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getBroadcast } from "@/api/DiscoverMusic"
export default {
  name: "broadcast",
  data () {
    return {
      broadcastData: {},
      loading: true
    }
  },
  created () {
    getBroadcast().then(res => {
      this.broadcastData = res.data;
      this.loading = false;
    })
  }
}
</script>

<style scoped>
.broadcast {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}
.title {
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
}
.box {
  width: 100%;
  display: flex;
}
.content {
  width: 33%;
  margin-right: 1%;
}
.content img {
  width: 100%;
  height: 90%;
  border-radius: 12px;
  cursor: pointer;
}
.name {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
  padding: 10px 0;
}
.name:hover {
  color: #000;
  cursor: pointer;
}
</style>