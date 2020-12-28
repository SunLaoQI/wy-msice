<template>
  <div class="songSheet">
    <!-- 歌单 -->
    <nav>
      <el-button round>{{name}} <i class="el-icon-arrow-right" /></el-button>
      <li v-for="(table,index) in tableList"
          :key="index"
          :class="tableActive==index?'tableActive':''"
          @click="handleTableClick(index,table)">{{table.name}}</li>
    </nav>
  </div>
</template>

<script>
import { getHotSongSheet } from "@/api/DiscoverMusic"
export default {
  name: "songSheet",
  data () {
    return {
      tableList: [{ name: "华语" }, { name: "流行" }, { name: "摇滚" }, { name: "民谣" }, { name: "电子" }, { name: "另类/独创" }, { name: "轻音乐" }, { name: "综艺" }, { name: "影视原声" }, { name: "ACG" }],
      name: "华语",
      tableActive: 0
    }
  },
  methods: {
    handleTableClick (index, table) {
      this.tableActive = index;
      this.name = table.name
    }
  },
  mounted () {
    getHotSongSheet().then(res => {
      console.log(res.data);
    })
  }
}
</script>

<style scoped>
.songSheet {
  width: 100%;
  height: 100%;
}
nav {
  display: flex;
}
.el-button {
  margin-right: 24%;
}
nav li {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 40px;
  margin: 0 1%;
  text-align: center;
  cursor: pointer;
}
.tableActive {
  color: #ec4141;
  background: #fdf5f5;
  border-radius: 20px;
  padding: 0 15px;
}
</style>