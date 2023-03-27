import request from "./index";
export function submitLeave(data){
  return request({
    url:'/leave/submitLeave',
    method: 'post',
    data:data,
  })
}

export default submitLeave;
