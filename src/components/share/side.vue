<template>
  <div class="side">
    <!-- 侧边栏 -->

    <!-- 发现音乐 -->
    <div class="find">
      <li v-for="(find,index) in findList"
          :key="index"
          @click="findClick(index)"
          :class="index==findActive?'findActive':''">{{find.name}}</li>
    </div>

    <!-- 我的音乐 -->
    <div class="myMusic">
      <span class="remind">我的音乐</span>
      <li v-for="(myMusic,index) in myMusicList"
          :key="index"
          @click="myMusicClick(index)"
          :class="myMusicActive==index?'myMusicActive':''">{{myMusic.name}}</li>
    </div>

    <!-- 创建的歌单 -->
    <div class="establish">
      <span class="remind">创建的歌单</span>
      <li>我喜欢的音乐</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "side",
  data () {
    return {
      findList: [{ name: "发现音乐" }, { name: "视频" }, { name: "朋友" }, { name: "直播" }, { name: "私人FM" }],
      findActive: 0,
      myMusicList: [{ name: "本地音乐" }, { name: "下载管理" }, { name: "我的音乐云盘" }, { name: "我的电台" }, { name: "我的收藏" }],
      myMusicActive: -1,
      likeMusic: []
    }
  },
  methods: {
    // 发现音乐
    findClick (index) {
      this.findActive = index;
      this.myMusicActive = -1;
      // this.$router.push(path)
    },
    myMusicClick (index) {
      this.myMusicActive = index;
      this.findActive = -1;
    }
  }
}
</script>

<style scoped>
.side {
  width: 100%;
  height: 100%;
}
.find {
  width: 100%;
}
.find li,
.myMusic li,
.establish li {
  width: 90%;
  height: 40px;
  line-height: 40px;
  margin: 2% auto;
  padding-left: 7px;
}
.find li:hover,
.myMusic li:hover {
  background: #f6f6f7;
  border-radius: 7px;
  cursor: pointer;
}
.findActive,
.myMusicActive {
  font-weight: 700;
  font-size: 18px;
  background: #f6f6f7;
  border-radius: 7px;
}

.remind {
  display: block;
  width: 90%;
  color: #ccc;
  height: 40px;
  line-height: 40px;
  padding-left: 7px;
  margin: 0 auto;
  font-size: 14px;
}

.establish .remind {
  cursor: pointer;
}
</style>