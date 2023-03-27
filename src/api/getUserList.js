import request from "./index";
export function getUserList(){
  return request({
    url:'/user/getUserList',
    method: 'get',
  })
}

export default getUserList;
