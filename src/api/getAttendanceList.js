import request from "./index";
export function getAttendanceList(){
  return request({
    url:'/attendance/getAttendanceList',
    method: 'get',
  })
}

export default getAttendanceList();
