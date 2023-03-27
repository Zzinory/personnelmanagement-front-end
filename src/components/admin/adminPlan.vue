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
        prop="affairName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="affairDrafter"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="affairContent"
        label="内容">
      </el-table-column>



    </el-table>

  </div>

</template>

<script>
import {getAffairList} from "../../api/getAnnouncementList";

export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {

  },
  created() {
    getAffairList().then(resp=>{
      this.tableData=resp.data.data;
    })
  }
}
</script>

<style scoped>

</style>
