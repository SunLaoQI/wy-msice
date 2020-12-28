<template>
  <div class="recommend"
       v-loading="loading">
    <!-- 推荐歌单 -->
    <p class="title">推荐歌单<i class="el-icon-arrow-right" /></p>
    <div class="box">
      <div class="content"
           v-for="(data,index) in recommendList"
           :key="index"
           @click="openDetails(data)">
        <img :src="data.picUrl">
        <p class="name">{{data.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommendSongSheet } from "@/api/DiscoverMusic";
export default {
  name: "recommend",
  data () {
    return {
      recommendList: [],
      loading: true
    }
  },
  methods: {
    openDetails (data) {
      this.$router.push({
        path: `/songDetails/${data.id}`
      });
    }
  },
  created () {
    getRecommendSongSheet().then(res => {
      this.recommendList = res.data.result;
      this.loading = false;
    })
  },
}
</script>

<style scoped>
.recommend {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.content {
  width: 18%;
  margin-left: 20px;
  margin-top: 15px;
}
.content:nth-child(1),
.content:nth-child(6) {
  margin-left: 0;
}
.content img {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
}
.name {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  padding: 5px 0;
}
.name:hover {
  color: #000;
}
</style>