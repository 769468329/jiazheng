import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 导入登录
import user from './modules/user'
<<<<<<< HEAD
import register from './modules/register'
import home from './modules/home'
import order from './modules/order'
import shopcar from './modules/shopcar'
import address from './modules/address'
=======
// 导入注册
import register from './modules/register'
// 导入首页
import home from './modules/home'
// 导入购物车
import shopcar from './modules/shopcar'
// 导入地址
import address from './modules/address'
// 导入订单
import order from './modules/order'
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80

export default new Vuex.Store({
  modules:{
    user,
    register,
    home,
<<<<<<< HEAD
    order,
    shopcar,
    address
=======
    shopcar,
    address,
    order
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
  }
})
