import Vuex from 'vuex'

import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {account:0,userId:0,userName:0}, // 存放数据

  getters: {
    account:(state)=>{
      return state.account
    },
  }, // 计算属性

  mutations: {
    setAccount(state,account){
      state.account=account;
    },
    setUserId(state,userId){
      state.userId=userId;
    },
    setUserName(state,userName){
      state.userName=userName;
    }

  }, // 修改state中数据的一些方法

  actions: {}, // 异步方法

  modules: {} // store模块

})

export default store
