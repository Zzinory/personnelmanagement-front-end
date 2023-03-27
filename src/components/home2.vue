<template>
<div>

  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246);border-radius: 8px">

<!--      用户列表-->
      <el-menu :default-openeds="['1', '2','3','4']">

        <el-menu-item index="1" @click="$router.push('/home2/staffCenter')">
          <template slot="title" ><i class="el-icon-user" ></i >我的信息</template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-claim"></i>考勤请假</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="$router.push('/home2/staffAttendance')">考勤打卡</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push('/home2/staffLeave')">请假申请</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-date"></i>公司事务</template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="$router.push('/home2/staffAnnouncement')">信息公告</el-menu-item>
            <el-menu-item index="3-2" @click="$router.push('/home2/staffPlan')">工作安排</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <template slot="title"><i class="el-icon-folder" @click="$router.push('/home2/staffPlan')"></i>公司文件</template>

        </el-menu-item>

      </el-menu>



    </el-aside>

    <el-container>
      <el-header style="background: #409EFF;border-radius: 8px;color: white">人事管理系统</el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>


</div>
</template>

<script>
export default {
  name: "home2"
}
</script>

<style scoped>




.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
  margin-left: 0px;

}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
