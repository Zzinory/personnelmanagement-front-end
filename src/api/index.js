import axios from 'axios';
const service = axios.create({
  //请求路径的前面被加上/api
  baseURL:'http://localhost:8888',
  timeout:10000,
});
export default service;
