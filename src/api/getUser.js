import request from "./index";
export function getUser(user){
  return request({
    url:'/user/getUser',
    method: 'post',
    data:user,
  })
}

export default getUser;
