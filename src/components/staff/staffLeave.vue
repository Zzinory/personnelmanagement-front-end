<template>

  <div>

    <el-form ref="form" :model="leaveInfo" label-width="80px">

      <el-form-item label="请假事由">
        <el-input v-model="leaveReason"></el-input>
      </el-form-item>


      <div class="block">
        <span class="demonstration">起始时间</span>
        <el-date-picker
          v-model="startTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>

      <div class="block">
        <span class="demonstration">结束时间</span>
        <el-date-picker
          v-model="endTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交审批</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
import submitLeave from "../../api/submitLeave";
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      startTime: '',
      endTime: '',
      leaveReason:'',
    };
  },
  // data() {
  //   return {
  //
  //       startTIme:'',
  //       endTime:'',
  //     leaveInfo: {
  //       name: '',
  //       region: '',
  //       date1: '',
  //       date2: '',
  //       delivery: false,
  //       type: [],
  //       resource: '',
  //       desc: ''
  //     }
  //   }
  // },
  methods: {
    onSubmit() {
      let data={leaveState:"待审批",applicantName:this.$store.state.userName,startTime:this.startTime,endTime:this.endTime}
      submitLeave(data).then(resp=>{
        console.log(resp)
        alert("提交成功！");
      })
    }
  }
}
</script>


<style scoped>

</style>
