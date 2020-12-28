<template>
  <div class="playAudid">
    <el-row>
      <el-col :span="6">
        <!-- 歌曲信息 -->
        <div class="songInfo">
          <div class="imgBox">
            <img :src="imgSrc">
          </div>
          <div class="textInfo">
            <p>{{songName}}</p>
            <p>{{singerName}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <!-- audio -->
        <div class="palyAudio">
          <audio :src="songUrl"
                 controls="controls">

          </audio>
        </div>
      </el-col>
      <el-col :span="6">
        <!-- 操作 -->
        <div class="operation">
          <span>{{musicQuality}}</span>
          <div class="progressBox">
            <el-slider v-model="volume"></el-slider>
          </div>
          <i class="el-icon-s-operation"
             style="line-height: 1.5;margin-left:40px;font-weight: 700;"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getSong } from "@/api/songDetails"
import { getSongUrl } from "@/api/share";
export default {
  name: "playAudio",
  data () {
    return {
      songList: [],
      songName: "",
      singerName: "",
      musicQuality: "标准",
      songIdList: this.$store.state.MusicIdList,
      songUrl: "",
      imgSrc: "",
      volume: 100
    }
  },
  watch: {
    songIdList: function (val) {
      getSong(val).then(res => {
        this.songName = res.data.songs[0].al.name;
        this.imgSrc = res.data.songs[0].al.picUrl;
        this.singerName = res.data.songs[0].ar[0].name;
      });
      getSongUrl(val).then(res => {
        this.songList = res.data.data[0];
        this.songUrl = this.songList.url;
      })
    }
  }
}
</script>

<style scoped>
.playAudid {
  position: fixed;
  width: 100%;
  height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  bottom: 0;
  z-index: 999;
  background: #f6f6f8;
}
.songInfo {
  display: flex;
}
.imgBox {
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 4px;
}
.imgBox img {
  width: 100%;
  border-radius: 4px;
}
.textInfo {
  font-size: 15px;
  margin-top: 10px;
  padding-left: 10px;
  height: 40px;
}
.palyAudio {
  width: 100%;
  height: 100%;
}
.palyAudio audio {
  width: 100%;
  outline: none;
}
.operation {
  display: flex;
  margin-top: 15px;
}
.operation span {
  display: block;
  height: 25px;
  border: 1px solid #ec4141;
  color: #ec4141;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  padding: 2px;
}
.progressBox {
  width: 30%;
}
div /deep/ .progressBox .el-slider__bar {
  background: #ec4141;
}
div /deep/ .progressBox .el-slider__button {
  border: 2px solid #ec4141;
}
div /deep/ .progressBox .el-slider__runway {
  margin: 10px 20px;
}
</style>