import request from "./index";
export function signIn(attendance){
  return request({
    url:'/attendance/signIn',
    method: 'post',
    data:attendance,
  })
}

export default signIn;
