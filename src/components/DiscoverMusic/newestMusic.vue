<template>
  <div class="newestMusic"
       v-loading="loading">
    <!-- 最新音乐 -->
    <p class="title">最新音乐<i class="el-icon-arrow-right" /></p>
    <div class="box">
      <div class="content"
           v-for="(music,index) in musicList"
           :key="index">
        <img :src="music.picUrl">
        <div class="text">
          <p>{{music.name}}</p>
          <p>{{music.song.album.artists[0].name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewSongs } from "@/api/DiscoverMusic";
export default {
  name: "newestMusic",
  data () {
    return {
      musicList: [],
      loading: true
    }
  },
  created () {
    getNewSongs().then(res => {
      this.musicList = res.data.result;
      this.loading = false
    })
  }
}
</script>

<style scoped>
.newestMusic {
  margin-top: 80px;
  width: 100%;
  height: 100%;
}
.title {
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
.box {
  display: flex;
  flex-wrap: wrap;
}
.content {
  display: flex;
  width: 31%;
  margin: 6px 15px 6px 0;
}
.content:hover {
  background: #e7e7e7;
  border-radius: 6px;
}
.content img {
  width: 20%;
  border-radius: 4px;
}
.text {
  margin-top: 3%;
  padding-left: 3%;
  font-size: 15px;
}
.text p:nth-child(1) {
  height: 50%;
}
.text p:nth-child(2) {
  height: 50%;
  font-size: 14px;
  color: #9f9f9f;
}

.text p:nth-child(2):hover {
  color: #000;
  cursor: pointer;
}
</style>