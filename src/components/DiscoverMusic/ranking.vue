<template>
  <div class="ranking"
       v-loading="loading">
    <h3 style="padding:1% 0">官方榜</h3>
    <div class="box"
         v-for="(data,index) in rankingFourList"
         :key="index">
      <div class="content">
        <img :src="data.coverImgUrl">
        <div class="rankingtable">
          <el-table :data="data.tracks"
                    stripe>
            <el-table-column prop="first" />
            <el-table-column prop="second" />
          </el-table>
          <span class="whole">查看全部 <i class="el-icon-arrow-right"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getRanking } from "@/api/DiscoverMusic";
import { getRankingDetails, getsingerzRanking } from "@/api/DiscoverMusic";
export default {
  name: "ranking",
  data () {
    return {
      rankingFourList: [],
      loading: true
    }
  },
  mounted () {
    getRankingDetails().then(res => {
      console.log(res.data);
      this.rankingFourList = res.data.list.slice(0, 4);
      this.loading = false;
    })
    getsingerzRanking().then(res => {
      console.log(res);
    })
  }
}
</script>

<style scoped>
.ranking {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.ranking .box {
  width: 100%;
}
.content {
  display: flex;
  width: 100%;
  margin-bottom: 4%;
}
.content img {
  width: 22%;
  border-radius: 3%;
  margin-right: 3%;
}
.content .rankingtable {
  margin-top: -1%;
  width: 60%;
}
.whole {
  display: block;
  margin-top: 2%;
  margin-left: 1%;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.whole:hover {
  color: rgba(0, 0, 0, 0.8);
}
</style>