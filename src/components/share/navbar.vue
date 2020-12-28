<template>
  <div class="navbar">
    <!-- 导航栏 -->
    <el-row>
      <el-col :span="6">
        <div class="logo">
          <span>网易云音乐</span>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="inputBox">
          <div class="moveBtn">
            <el-button
              class="el-icon-arrow-left"
              size="mini"
              circle
              @click="$router.go(-1)"
            ></el-button>
            <el-button
              class="el-icon-arrow-right"
              size="mini"
              circle
              @click="$router.go(1)"
            ></el-button>
          </div>
          <div class="search">
            <el-input
              prefix-icon="el-icon-search"
              placeholder="搜索"
              v-model="searchData"
              @keyup.enter.native="enterSearch"
            ></el-input>
          </div>
          <div class="mikeBtn">
            <el-button
              class="el-icon-microphone"
              size="mini"
              circle
            ></el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="userInfo" @click="clikeLogin">
          <img :src="userInfo.avatarUrl" />
          <p class="userName">
            {{ userName
            }}<span class="el-icon-caret-bottom" @click="openUserInfo"></span>
          </p>
        </div>
      </el-col>
    </el-row>
    <div class="userInfoBox" v-show="userInfoBox">
      <div class="dynamic">
        <li>
          <span>{{ userInfo.eventCount }}</span>
          <p>动态</p>
        </li>
        <li>
          <span>{{ userInfo.follows }}</span>
          <p>关注</p>
        </li>
        <li>
          <span>{{ userInfo.followeds }}</span>
          <p>粉丝</p>
        </li>
      </div>
      <div class="signInBtn">
        <el-button round size="mini">签到</el-button>
      </div>
      <el-divider></el-divider>
      <div class="dynamicInfo">
        <li>我的会员</li>
        <li style="margin:15px auto;">等级</li>
        <li>商城</li>
        <el-divider></el-divider>
        <li>个人信息设置</li>
        <li style="margin-top:15px;">绑定社交账号</li>
        <el-divider></el-divider>
        <li @click="signOut">退出登录</li>
      </div>
    </div>

    <el-dialog :visible.sync="loginDialog" title="登录" center>
      <div class="loginInput">
        <el-input v-model="phoneData" placeholder="请输入手机号" />
        <el-input
          type="password"
          v-model="passwordData"
          placeholder="请输入密码"
        />
      </div>
      <div class="loginBtn">
        <el-button type="danger" @click="login">登录</el-button>
        <br />
        <el-button @click="loginDialog = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { postLogin } from "@/api/login";
export default {
  name: "navbar",
  data() {
    return {
      searchData: "", // 搜索框输入的内容
      avatar: "../../assets/avatar.png",
      userName: "未登录",
      loginDialog: false,
      phoneData: "",
      passwordData: "",
      userInfo: "",
      userInfoBox: false,
    };
  },
  methods: {
    enterSearch() {
      let path = this.$route.path.slice(0, 14);
      if (path == "/searchDetails") {
        return;
      } else {
        this.$router.push({
          path: `/searchDetails/${this.searchData}`,
        });
      }
    },
    clikeLogin() {
      if (!localStorage.getItem("userData")) {
        this.loginDialog = true;
      } else {
        this.userInfoBox = !this.userInfoBox;
      }
    },
    login() {
      postLogin(this.phoneData, this.passwordData).then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data.profile));
        this.$message({
          message: "登录成功",
          type: "success",
        });
        this.$router.go(0);
        this.loginDialog = false;
      });
    },
    openUserInfo() {
      this.userInfoBox = !this.userInfoBox;
    },
    // 退出登录
    signOut() {
      localStorage.removeItem("userData");
      this.$router.go(0);
      this.$message({
        message: "退出成功",
        type: "warning",
      });
    },
  },
  mounted() {
    if (localStorage.getItem("userData")) {
      this.userInfo = JSON.parse(localStorage.getItem("userData"));
      this.userName = this.userInfo.nickname;
      this.$store.commit("getUserId", this.userInfo.userId);
    }
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 59px;
  background-color: #ec4141;
  z-index: 999;
}
.logo {
  color: #ffffff;
  text-align: center;
  font-size: 22px;
  line-height: 59px;
  font-weight: 600;
  cursor: pointer;
}
.inputBox {
  display: flex;
  line-height: 59px;
}
.search {
  margin: 0 10px;
}
div /deep/.search .el-icon-search {
  color: #fff;
}
div /deep/.search .el-input__inner {
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.05);
  color: #fff;
  border: none;
}
.mikeBtn button,
.moveBtn button {
  background: rgba(0, 0, 0, 0.05);
  border: none;
  color: rgba(255, 255, 255, 0.4);
}

.userInfo {
  display: flex;
  height: 100%;
}
.userInfo img {
  margin-top: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.userInfo p {
  margin-left: 10px;
  color: #fff;
  font-size: 15px;
  line-height: 59px;
  cursor: pointer;
}
.loginInput {
  width: 80%;
  margin: 0 auto;
}
div /deep/ .loginInput .el-input__inner {
  margin: 5px 0;
}

.loginBtn {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
div /deep/ .loginBtn .el-button {
  width: 100%;
  margin: 10px 0;
}
.userInfoBox {
  width: 25%;
  height: 380px;
  z-index: 999;
  position: absolute;
  right: 18%;
  top: 6.8%;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0px 0px 7px 0px #ccc;
}

.dynamic {
  width: 100%;
  display: flex;
  margin-top: 6%;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
}

.dynamic li {
  width: 33.3%;
  text-align: center;
}
.dynamic li span {
  font-weight: 700;
  font-size: 18px;
}
.dynamic li p {
  font-size: 13px;
}
.dynamic li:hover {
  color: #000;
}
.signInBtn {
  width: 25%;
  margin: 0 auto;
}
.signInBtn .el-button {
  width: 100%;
  margin: 10px 0 0 0;
}
.dynamicInfo li {
  width: 92%;
  margin: 0 auto;
  cursor: pointer;
}
div /deep/ .dynamicInfo .el-divider--horizontal {
  margin: 15px 0;
}
div /deep/ .el-divider--horizontal {
  margin: 15px 0;
}
</style>
