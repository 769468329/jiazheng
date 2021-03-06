<<<<<<< HEAD
import {get,post,post_obj_array} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    orders:[],
  },
  getters: {
    // 根据订单状态分类过滤
    ordersStatusFilter(state){
      return (status) => {
        return state.orders.filter(order => order.status === status)
    }
    }
    // // 待支付
    // orderUnPay(state) {
    //   const res = state.orders.filter((item) => {
    //     return item.status == '待支付'
    //   })
    //   return res
    // },
    // // 待派单
    // orderUnSend(state) {
    //   const res = state.orders.filter((item) => {
    //     return item.status == '待派单'
    //   })
    //   return res
	  // },
    // // 待接单
    // orderUnOrder(state) {
    // const res = state.orders.filter((item) => {
    //   return item.status == '待接单'
    // })
    // return res
    // },
    // // 待服务
    // orderUnServe(state) {
    // const res = state.orders.filter((item) => {
    //   return item.status == '待服务'
    // })
    // return res
    // },
    // // 已完成
    // orderFinish(state) {
    // const res = state.orders.filter((item) => {
    //   return item.status == '已完成'
    // })
    // return res
    // }
  },
  mutations: {
    refreshOrder(state,orders){
        state.orders = orders
    }
  },
  actions: {
    // 查询所有订单
    async findOrderById({commit},customerId){
        let res = await get('/order/query',{customerId})
        commit('refreshOrder',res.data)
    },
    // 保存订单信息
    async saveOrder(context,params){
      let res = await post_obj_array('/order/save',params)
      console.log(res.data)
      // commit('refreshOrder',res.data)
      return res
    },
  }
=======
import {post_obj_array,get} from '@/http/axios'
import _ from 'lodash'
export default {
    namespaced:true,
    state: {
        orders:[]
    },
    getters:{
        // 根据订单状态进行分类过滤
        ordersStatusFilter(state) {
            return (status) => {
                return state.orders.filter(order => order.status === status)
            }
        }
    },
    mutations: {
        refreshOrder(state,orders){
            state.orders = orders
        }
    },
    actions:{
        // 根据顾客id查询所有订单
        async findOrderByCustomerId(context,customerId){
            let res = await get('/order/query',{customerId})
            context.commit('refreshOrder',res.data)
        },
        // 保存订单
        async saveOrder(context,params){
            let res = await post_obj_array('/order/save',params)
            return res
        }
    }
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
}