import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    USER_ID: "",  // 用户ID
    MusicIdList: [] // 用户播放歌曲id
  },
  mutations: {
    // 获取用户id
    getUserId (state, userId) {
      state.USER_ID = userId;
    },
    // 获取音乐id
    getMusicId (state, musicId) {
      state.MusicIdList.push(musicId);
    }
  },
  actions: {
  },
  modules: {
  }
})
