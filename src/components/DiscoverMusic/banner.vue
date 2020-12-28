<template>
  <el-carousel class="banner" v-loading="loading" type="card">
    <el-carousel-item
      v-for="(banner, index) in bannerList"
      :key="index"
      height="200px"
      autoplay="false"
    >
      <img :src="banner.imageUrl" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getBanner } from "@/api/DiscoverMusic";
export default {
  name: "banner",
  data() {
    return {
      bannerList: [],
      loading: true,
    };
  },
  created() {
    getBanner().then((res) => {
      this.bannerList = res.data.banners;
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  margin: 15px 0;
}
.banner img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
div /deep/ .el-carousel__container {
  height: 200px;
}
</style>
