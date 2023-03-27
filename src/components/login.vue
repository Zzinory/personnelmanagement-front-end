<template>

<div>

  <div id="title">
    人事管理系统
  </div>

  <div id="login-box">

    <el-form :inline="true" class="demo-form-inline" >

      <h3 class="login-title">用户登录</h3>

      <el-form-item  prop="account">
        <el-input  placeholder="账号" v-model="account"  style="width: 217px"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input  placeholder="密码" v-model="password" show-password></el-input>
      </el-form-item>

      <el-form-item>

        <Vcode :show="isShow" @success="success" @close="close" />
        <el-button @click="submit" style="margin: auto">验证</el-button>


        <el-button @click="clear()">重置</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="login-button" @click="login()">登录</el-button>
<!--        <el-button type="primary" class="login-button" @click="$router.push('/home')">登录</el-button>-->
<!--        <el-button type="primary" class="login-button" @click="test()">test</el-button>-->
      </el-form-item>

    </el-form>

  </div>

</div>

</template>

<script>
import login from "../api/login.js"
import axios from "axios";
import Vcode from "vue-puzzle-vcode";
import store from "../store";
import getUser from "../api/getUser";

export default {

  data(){
    return{
      verification:false,
      isShow:false,
      account: '',
      password: '',
    }
  },
  components: {
    Vcode
  },
  methods:{
    test(){
      let data={userName:"叶初航"}
      login(data).then(resp=>{console.log(resp)})
      // axios.get("http://localhost:8888/user/test").then(resp=>console.log(resp));
      // axios.post("http://localhost:8888/user/create",data).then(resp=>console.log(resp));=
    },
    login(){
      if (this.account=='')
        alert("请输入账号")
      else if (this.password==''){
        alert("请输入密码")
      }
      else{
        if (this.verification==false)
          alert("请进行验证");
        else{


          // store.commit("setAccount",2);
          // alert(this.$store.getters.account);
          // alert(this.$store.state.account);

          let loginData={userAccount:this.account,password:this.password};
          login(loginData).then(resp=>{
            console.log(resp.data)
            if (resp.data.code==1)
              alert(resp.data.errMsg)
            else{
              this.$store.commit("setAccount",this.account);//把当前用户名存入vuex
              getUser(loginData).then(resp=>{
                this.$store.commit("setUserId",resp.data.data.id);//把当前用户id存入vuex
                this.$store.commit("setUserName",resp.data.data.userName);//把当前用户姓名存入vuex
                // console.log(this.$store.state.userId);
              })
              // alert(this.$store.state.account)
              // this.$store.sta;

              if (resp.data.data=="登录成功1")//1管理员 2员工 3人事主管
                this.$router.push('/home1')
              if (resp.data.data=="登录成功2")
                this.$router.push('/home2')
              if (resp.data.data=="登录成功3")
                this.$router.push('/home3')
            }
          })
        }
      }
    },
    clear(){
      this.account='',
        this.password=''
    },
    //验证所用
    submit() {
      this.isShow = true;

    },
    // 用户通过了验证
    success(msg) {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
      this.verification = true;
    },
    // 用户点击遮罩层，应该关闭模态框
    close() {
      this.isShow = false;
    },

  },
  name: "login",

}
</script>

<style scoped>
#title{
  margin: auto;
  text-align: center;
  margin-top: 7%;
  font-size: 30px;
}
#login-box{
  box-shadow: 0 0 25px #cac6c6;
  width: 350px;
  margin: auto;
  margin-top: 10px;
  border-radius: 8px;
  text-align: center;
}
.login-border {
  box-shadow: 0 0 25px #cac6c6;
  width: 350px;
  margin: auto;
  margin-top: 7%;
  border-radius: 8px;
}
.login-title{
  margin-bottom: 30px;
  padding-top: 35px;
  tab-size: 30px;
}
.login-button{
  width: 202px;
  margin-bottom: 40px;
}

input.el-input__inner {
  width: 202px;
}

</style>
