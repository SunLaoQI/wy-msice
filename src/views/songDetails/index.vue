<template>
  <div class="index">
    <!-- 歌单详情 -->
    <div class="content"
         v-loading="loading">
      <el-row>
        <el-col :span="5">
          <img :src="songSheetDetails.coverImgUrl">
        </el-col>
        <el-col :span="19">
          <div class="textContent">
            <h2>{{songSheetDetails.name}}</h2>
            <div class="creator">
              <img :src="songSheetDetails.creator.avatarUrl">
              <span>{{songSheetDetails.creator.nickname}}</span>
              <span>{{getTime.slice(0,10)}}创建</span>
            </div>
            <div class="btn">
              <el-button type="primary"
                         round>播放全部</el-button>
              <el-button round>收藏</el-button>
              <el-button round>分享</el-button>
              <el-button round>下载全部</el-button>
            </div>
            <p class="tags">标签: <span v-for="(font,i) in songSheetDetails.tags"
                    :key="i">{{font}}</span></p>
            <p class="trackIds">歌曲: <span>{{songSheetDetails.trackIds.length}}</span></p>
            <p class="description">简介: <span>{{songSheetDetails.description}}</span></p>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 歌曲评论收藏者 -->
    <div class="box">
      <div class="table">
        <li v-for="(item,index) in tableList"
            :key="index"
            @click="tableClick(index)"
            :class="tableActive==index?'tableActive':''">{{item.name}}</li>
      </div>
      <el-input v-model="searchMusic"
                class="searchMusic"
                placeholder="搜索歌单音乐"
                suffix-icon="el-icon-search" />
    </div>
    <div class="songSheet"
         v-if="tableActive==0">
      <songTable :songList="songList" />
    </div>
    <div class="songSheetComment"
         v-if="tableActive==1">
      <songSheetComment :songSheetId="songSheetId" />
    </div>
  </div>
</template>

<script>
import { getListDetails, getSong } from "@/api/songDetails";
import { formatDate } from "@/timeStamp";
import songTable from "@/components/songDetails/songTable";
import songSheetComment from "@/components/songDetails/songSheetComment"

export default {
  name: "index",
  data () {
    return {
      songSheetDetails: {
        creator: {},
        trackIds: []
      },
      songSheetId: 0,
      loading: true,
      tableList: [{ name: "歌曲列表" }, { name: "评论" }, { name: "收藏者" }],
      tableActive: 0,
      songList: [],
      searchMusic: "",
    }
  },
  components: { songTable, songSheetComment },
  computed: {
    // 创建时间转换
    getTime () {
      return formatDate(this.songSheetDetails.createTime)
    }
  },
  methods: {
    tableClick (index) {
      this.tableActive = index;
    }
  },
  mounted () {
    getListDetails(this.$route.params.id).then(res => {
      this.songSheetDetails = res.data.playlist;
      this.songSheetId = this.songSheetDetails.id;
      this.songSheetDetails.trackIds.forEach(item => {
        getSong(item.id).then(res => {
          this.songList.push(res.data.songs[0])
        })
      })

      this.loading = false;
    })
  }
}
</script>

<style scoped>
.index {
  width: 95%;
  height: 100%;
  margin: 8% auto;
}
img {
  width: 100%;
  border-radius: 6px;
}
.textContent {
  margin-left: 3%;
}
.creator {
  width: 100%;
  display: flex;
  margin-top: 0.8%;
}
.creator img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.creator span {
  font-size: 14px;
  line-height: 33px;
  padding-left: 1%;
}
.creator span:nth-child(2),
.tags span {
  color: #507daf;
  cursor: pointer;
}
.creator span:nth-child(2),
.tags span {
  color: #0b57ad;
}
.creator span:nth-child(3) {
  color: rgba(0, 0, 0, 0.6);
}
.btn {
  margin: 1.2% 0;
}
div /deep/ .btn .el-button--primary {
  background: #ec4141;
  border-color: #ec4141;
}
div /deep/ .btn .el-button--primary:hover {
  background: #cc3232;
  border-color: #cc3232;
}
.tags,
.trackIds,
.description {
  font-size: 14px;
}
.trackIds {
  margin: 0.5% 0;
}
.trackIds span,
.description span {
  color: rgba(0, 0, 0, 0.6);
}

.box {
  display: flex;
}
.table {
  width: 100%;
  display: flex;
  margin-top: 2%;
}
.table li {
  width: 10%;
  height: 30px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
}
.tableActive {
  font-weight: 700;
  border-bottom: 3px solid #ec4141;
}
.searchMusic {
  width: 25%;
}
div /deep/ .searchMusic .el-input__inner {
  height: 28px;
  border-radius: 18px;
  background: #f7f7f7;
  margin-top: 5%;
}
div /deep/ .searchMusic .el-input__icon {
  line-height: 28px;
  margin-top: 5%;
}
</style>