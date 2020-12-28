<template>
  <div class="index">
    <header>
      <navbar />
    </header>
    <div class="content">
      <div class="left">
        <side />
      </div>
      <div class="rigth">
        <router-view></router-view>
      </div>
    </div>
    <footer>
      <playAudio />
    </footer>
  </div>
</template>

<script>
import navbar from "@/components/share/navbar";
import side from "@/components/share/side";
import playAudio from "@/components/share/playAudio";
export default {
  name: "index",
  data () {
    return {

    }
  },
  components: { navbar, side, playAudio }
}
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
}
.index .content {
  display: flex;
  width: 100%;
  height: 100%;
}
.content .left {
  position: fixed;
  top: 0;
  width: 20%;
  height: 100%;
  margin-top: 5%;
}
.content .rigth {
  width: 78%;
  height: 100%;
  border-left: 1px solid #ccc;
  margin-left: 20%;
}
</style>