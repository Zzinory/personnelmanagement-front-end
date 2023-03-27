<template>
  <div>

    <div class="time">
      <div class="time-left">
        <span class="span1"> {{ time.timeStr.split(' ')[1] }}</span>
        <span class="span2"> {{ time.timeStr.split(' ')[0] }}</span>
      </div>
      <div class="time-right">
      </div>
    </div>

    <el-form ref="form"  label-width="80px">

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

      <el-form-item>
        <el-button type="primary" @click="signIn()">签到</el-button>
        <el-button type="primary" @click="signOut()">签退</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
import {getAttendanceList} from "../../api/getAttendanceList";
import getUserAttendanceList from "../../api/getUserAttendanceList";
import getUser from "../../api/getUser";
import signIn from "../../api/signIn";
export default {
  data() {
    return {
      // 时间组件
      timer: null, // 定时器
      time: {}
    }
  },
  methods: {
    signIn() {
      let time = new Date();
      let data={userId:this.$store.state.userId,userName:this.$store.state.userName,attendanceTime:time};
      signIn(data).then(resp=>{
        console.log(resp);
      })
    },
    signOut() {
      let time = new Date();
      let data={userId:this.$store.state.userId,userName:this.$store.state.userName,exitTime:time};
      signIn(data).then(resp=>{
        console.log(resp);
      })
    },
    // 获取当前时间显示
    getDate() {
      this.time = this.parseTime(new Date()) // 这里只是获取当前时间，传参而已
      // console.log(this.time)
    },
    parseTime(time, cFormat) {
      const resObj = {}
      if (arguments.length === 0 || !time) {
        return null
      }
      const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
      let date
      if (typeof time === 'object') {
        date = time
      } else {
        if ((typeof time === 'string')) {
          if ((/^[0-9]+$/.test(time))) {
            // support "1548221490638"
            time = parseInt(time)
          } else {
            time = time.replace(new RegExp(/-/gm), '/')
          }
        }

        if ((typeof time === 'number') && (time.toString().length === 10)) {
          time = time * 1000
        }
        date = new Date(time)
      }
      const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
      }
      const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        return value.toString().padStart(2, '0')
      })

      resObj.week = ['日', '一', '二', '三', '四', '五', '六'][formatObj.a]
      resObj.mark = ['通宵加班', '加班', '摸鱼', '摸鱼', '摸鱼', '加班', '加班填坑'][formatObj.a]
      resObj.timeStr = time_str

      for (const key in formatObj) {
        if (formatObj.hasOwnProperty(key)) {
          const element = formatObj[key]
          resObj[key] = element.toString().padStart(2, '0')
        }
      }
      return resObj
    },
  },
  mounted() {
    // 在挂载期间定时调用
    this.timer = setInterval(() => {
      this.getDate() // 要调用的函数
    }, 1000)
  },
  created() {
    let user={id:this.$store.state.userId};
    getUserAttendanceList(user).then(resp=>{
      this.tableData=resp.data.data;
      console.log(resp);
      console.log(user.userId)
    })
  }
}
</script>


<style scoped>

</style>
