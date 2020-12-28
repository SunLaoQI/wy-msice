<template>
  <div class="recommendMv"
       v-loading="loading">
    <!-- 推荐Mv -->
    <p class="title">推荐MV<i class="el-icon-arrow-right" /></p>
    <div class="box">
      <div class="content"
           v-for="(mvData,index) in mvList"
           :key="index">
        <img :src="mvData.picUrl">
        <div class="text">
          <p>{{mvData.name}}</p>
          <p>{{mvData.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommendMV } from "@/api/DiscoverMusic"
export default {
  name: "recommendMv",
  data () {
    return {
      mvList: [],
      loading: true
    }
  },
  created () {
    getRecommendMV().then(res => {
      this.mvList = res.data.result.slice(0, 3);
      this.loading = false;
    })
  }
}
</script>

<style scoped>
.recommendMv {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}
.title {
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
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
  border-radius: 7px;
}
.text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
}
.text p:hover {
  color: #000;
  cursor: pointer;
}
</style>