import request from "./index";
export function getUserAttendanceList(user){
  return request({
    url:'/attendance/getUserAttendanceList',
    method: 'post',
    data:user,
  })
}

export default getUserAttendanceList;
