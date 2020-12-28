<template>
  <div class="index">
    <div class="box">
      <p class="title"
         style="padding: 20px 0 0 20px;margin-left:20px"
         v-if="navActive==0">找到首{{songNums}}单曲</p>
      <header>
        <li v-for="(navItem,index) in navList"
            :key="index"
            @click="navClick(index)"
            :class="navActive==index?'navActive':''">{{navItem.name}}</li>
      </header>
      <el-divider></el-divider>
      <searchTable v-if="navActive==0"
                   @songNum="songNum" />
    </div>
  </div>
</template>

<script>
import searchTable from "@/components/share/searchTable";
export default {
  name: "index",
  data () {
    return {
      navList: [{ name: "单曲" }, { name: "歌手" }, { name: "专辑" }, { name: "视频" }, { name: "歌单" }, { name: "歌词" }, { name: "主播电台" }, { name: "用户" }],
      navActive: 0,
      songNums: 0
    }
  },
  components: { searchTable },
  methods: {
    navClick (index) {
      this.navActive = index;
    },
    songNum (val) {
      this.songNums = val;
    }
  }
}
</script>

<style scoped>
.index {
  margin-top: 5%;
  width: 100%;
  height: 100%;
}
.title {
  font-weight: 700;
  font-size: 19px;
}
header {
  display: flex;
  margin: 20px 20px;
}
header li {
  width: 80px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
}
header li:hover {
  color: #000;
  cursor: pointer;
}
.navActive {
  font-weight: 700;
}
</style>