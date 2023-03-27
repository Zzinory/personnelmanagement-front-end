import request from "./index";
export function modifyUser(user){
  return request({
    url:'/user/modifyUser',
    method: 'post',
    data:user,
  })
}

export default modifyUser;
