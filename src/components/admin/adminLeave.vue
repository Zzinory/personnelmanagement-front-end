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
        prop="applicantName"
        label="请假人">
      </el-table-column>
      <el-table-column
        prop="leaveId"
        label="假条ID">
      </el-table-column>
      <el-table-column
        prop="startTime"
        label="起始时间">
      </el-table-column>
      <el-table-column
        prop="endTime"
        label="结束时间">
      </el-table-column>
      <el-table-column
        prop="censorName"
        label="审批人">
      </el-table-column>
      <el-table-column
        prop="leaveState"
        label="审批状态">
      </el-table-column>


    </el-table>

  </div>

</template>

<script>
import {getLeaveList} from "../../api/getLeaveList";

export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {

  },
  created() {
    getLeaveList().then(resp=> {
      this.tableData=resp.data.data;

    })
  }
}
</script>

<style scoped>

</style>
