import request from "./index";
export function getAffairList(){
  return request({
    url:'/affair/getAffairList',
    method: 'get',
  })
}

export default getAffairList();
