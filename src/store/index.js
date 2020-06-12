import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import register from './modules/register'
import home from './modules/home'
import order from './modules/order'
import shopcar from './modules/shopcar'
import address from './modules/address'

export default new Vuex.Store({
  modules:{
    user,
    register,
    home,
    order,
    shopcar,
    address
  }
})
