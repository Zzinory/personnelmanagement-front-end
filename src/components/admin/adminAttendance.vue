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
        prop="userName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="attendanceId"
        label="打卡ID">
      </el-table-column>
      <el-table-column
        prop="attendanceTime"
        label="签到时间">
      </el-table-column>
      <el-table-column
        prop="exitTime"
        label="签退时间">
      </el-table-column>


    </el-table>

  </div>

</template>

<script>
import {getAttendanceList} from "../../api/getAttendanceList";

export default {
  data() {
    return {
      tableData: [],
    }
  },
  methods: {

  },

  created() {
    getAttendanceList().then(resp=>{
      this.tableData=resp.data.data;
    })
  }
}
</script>

<style scoped>

</style>
