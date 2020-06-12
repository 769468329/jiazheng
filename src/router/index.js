import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面 --  底部导航
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import User from '../views/manager/User'
// 登录页面
import Login from '../views/Login'

// vant组件的提示
import { Toast } from 'vant'
// 引入状态机
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/manager/home"
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem('token');
      if(token){
        // 调用查询info的方法
        store.dispatch('user/info',token)
        .then(()=>{
          // 当获取万用户信息之后才允许跳转
          next();
        })
      } else {
        // 如果token不存在，跳转到登录页面
        Toast("token失效")
        next({path:'/login'})
      }
    },
    children:[{
      path: 'home',
      component: Home,
    },{
      path: 'order',
      component: Order,
    },{
      path: 'user',
      component: User,
    },{
      path: 'product',
<<<<<<< HEAD
      component:()=>import('@/views/manager/product/Product')
    },{
      path: 'order_confirm',
      component:()=>import('@/views/manager/order/OrderConfirm')
=======
      component: () => import('@/views/manager/product/Product'),
    },{
      path: 'order_confirm',
      component: () => import('@/views/manager/order/OrderConfirm'),
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
    },{
      path: 'address',
      component: () => import('@/views/manager/address/Address'),
    },{
      path: 'address_add',
      component: () => import('@/views/manager/address/Add'),
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },{
<<<<<<< HEAD
    path: '/register',
    component:()=>import('@/views/Register')
=======
    path:'/register',
    // 懒加载
    component:() => import('@/views/Register')
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
