<template>
<div>


<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="工号">
    <el-input v-model="form.id"  :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="form.userName"></el-input>
  </el-form-item>
  <el-form-item label="账户">
  <el-input v-model="form.userAccount"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.password" show-password></el-input>
  </el-form-item>
  <el-form-item label="职位" >
    <el-input v-model="form.position" :disabled="true"></el-input>

  </el-form-item>
  <el-form-item label="入职日期">
    <el-input v-model="form.entryDate"></el-input>
  </el-form-item>


<el-form-item>

  <el-button type="primary" @click="onSubmit">修改</el-button>
  <el-button type="primary">确定</el-button>

</el-form-item>

</el-form>
</div>
</template>
<script>
import getUser from "../../api/getUser";
import modifyUser from "../../api/modifyUser";
export default {
  data() {
    return {
      form: {
      }
    }
  },
  methods: {
    onSubmit() {
      let user = {id:this.form.id,userName:this.form.userName,userAccount:this.form.userAccount,password:this.form.password}
      modifyUser(user).then(resp=>{
        // console.log(resp.data);
        if (resp.data.code==0){
          alert("修改成功");
          this.$store.commit("setAccount",user.userAccount);
          this.$store.commit("setUserName",resp.data.data.userName);
        }

        else {
          if (resp.data.code==1)
            alert("修改失败，账户名重复");
        }
      })
    }
  },
  created() {
    let user = {userAccount:this.$store.state.account};
    getUser(user).then(resp=>{
      console.log(resp.data.data);
      if (resp.data.data.role==1)
        resp.data.data.position="管理员";
      if (resp.data.data.role==2)
        resp.data.data.position="普通员工";
      if (resp.data.data.role==1)
        resp.data.data.position="人事管理";
      this.form=resp.data.data;
    })




    //
    // console.log(this.$store.state.account);
    // this.form.account=this.$store.state.account;
  }

}
</script>


<style scoped>

</style>
