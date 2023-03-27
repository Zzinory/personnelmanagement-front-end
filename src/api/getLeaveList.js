import request from "./index";
export function getLeaveList(){
  return request({
    url:'/leave/getLeaveList',
    method: 'get',
  })
}

export default getLeaveList;
