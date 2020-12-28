<template>
  <div class="songTable">
    <el-table :data="songList.slice((page.currentPage-1)*page.pagesize,page.currentPage*page.pagesize)"
              @row-dblclick="handleDbClick">
      <el-table-column label="音乐标题"
                       prop="name"
                       width="500"></el-table-column>
      <el-table-column label="歌手"
                       prop="ar[0].name"></el-table-column>
      <el-table-column label="专辑"
                       prop="al.name"></el-table-column>
      <el-table-column label="时长"
                       prop=""></el-table-column>
    </el-table>

    <el-pagination class="pagination"
                   layout="total, prev, pager, next, slot, jumper"
                   :total="page.total"
                   :page-size="page.pagesize"
                   @current-change='handleCurrentChange'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "songTable",
  props: {
    songList: Array
  },
  data () {
    return {
      page: {
        total: 0,
        currentPage: 1,
        pagesize: 10
      },
    }
  },
  methods: {
    handleCurrentChange: function (currentPage) {
      this.page.currentPage = currentPage;
    },
    handleDbClick (row) {
      this.$store.commit('getMusicId', row.id);
    }
  },
  mounted () {
    this.page.total = this.songList.length;
  }
}
</script>

<style>
</style>