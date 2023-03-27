import request from "./index";
export function login(user){
  return request({
    url:'/user/login',
    method: 'post',
    data:user,
  })
}

export default login;
