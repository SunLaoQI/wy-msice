<template>
  <div class="searchTable"
       v-loading="loading">
    <el-table :data="searchList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              @row-dblclick="fn_rowClick">
      <el-table-column label="音乐标题"
                       prop="name"></el-table-column>
      <el-table-column label="歌手"
                       prop="ar[0].name"
                       width="150"></el-table-column>
      <el-table-column label="专辑"
                       prop="al.name"
                       width="150"></el-table-column>
      <el-table-column label="时长"
                       prop=""
                       width="100"></el-table-column>
      <el-table-column label="热度"
                       prop=""
                       width="150"></el-table-column>
    </el-table>
    <el-pagination layout="total, prev, pager, next, slot, jumper"
                   :total="total"
                   :page-size="pagesize"
                   @current-change='handleCurrentChange'>
    </el-pagination>
  </div>
</template>

<script>
import { getSearchData } from "@/api/search"
export default {
  name: "searchTable",
  data () {
    return {
      searchList: [],
      total: 0,
      currentPage: 1,
      pagesize: 10,
      loading: true
    }
  },
  methods: {
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
    // 点击获取歌曲id并将id存储
    fn_rowClick (row) {
      this.$store.commit('getMusicId', row.id);
    }
  },
  mounted () {
    getSearchData(this.$route.params.songName).then(res => {
      this.searchList = res.data.result.songs;
      this.total = this.searchList.length;
      this.loading = false;
    })
  }
}
</script>

<style>
</style>