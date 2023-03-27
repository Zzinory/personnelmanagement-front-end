<template>
  <div>

    <el-table
      :data="tableData"
      height="800"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userAccount"
        label="账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="position"
        label="职位">
      </el-table-column>
      <el-table-column
        prop="entryDate"
        label="入职日期">
      </el-table-column>
      <el-table-column
        prop="quitDate"
        label="离职日期">
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
import HelloWorld from "../HelloWorld";
import getUserList from "../../api/getUserList";
export default {
  components: {HelloWorld},
  data() {
    return {
      tableData: [],

    }
  },
  methods: {

  },
  created(){
    getUserList().then(resp=>
      {
        this.tableData=resp.data.data;
      }
    )
  }



}
</script>

<style scoped>

</style>
