<template>
  <div class="index">
    <!-- 发现音乐 -->
    <header>
      <li v-for="(table,index) in tableList"
          :key="index"
          @click="tableClick(index)"
          :class="tableActive==index?'tableActive':''">{{table.name}}</li>
    </header>

    <!-- 内容 start -->
    <div class="content"
         v-if="tableActive==0">
      <banner />
      <recommend />
      <broadcast />
      <newestMusic />
      <recommendMV />
    </div>
    <div class="content"
         v-if="tableActive==1">
      <songSheet />
    </div>

    <div class="content"
         v-if="tableActive==3">
      <ranking />
    </div>
    <!-- 内容 end -->
  </div>
</template>

<script>
// 首页
import banner from "@/components/DiscoverMusic/banner";
import recommend from "@/components/DiscoverMusic/recommend";
import broadcast from "@/components/DiscoverMusic/broadcast";
import newestMusic from "@/components/DiscoverMusic/newestMusic";
import recommendMV from "@/components/DiscoverMusic/RecommendMV";

//歌单
import songSheet from "@/components/DiscoverMusic/songSheet"

// 排行榜
import ranking from "@/components/DiscoverMusic/ranking"
export default {
  name: "index",
  data () {
    return {
      tableList: [{ name: "个性推荐" }, { name: "歌单" }, { name: "直播电台" }, { name: "排行榜" }, { name: "歌手" }, { name: "最新音乐" }],
      tableActive: 0
    }
  },
  components: { banner, recommend, broadcast, newestMusic, recommendMV, ranking, songSheet },
  methods: {
    tableClick (index) {
      this.tableActive = index
    }
  }
}
</script>

<style scoped>
.index {
  margin: 5% 0 7% 0;
  width: 100%;
  height: 100%;
}
header {
  display: flex;
  padding: 10px 0 0 20px;
  margin-left: 10px;
}
header li {
  width: 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 17px;
  margin: 0 10px;
  cursor: pointer;
}
.tableActive {
  font-weight: 700;
  font-size: 20px;
  border-bottom: 4px solid #ec4141;
}
.content {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
</style>