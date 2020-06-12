<template>
<<<<<<< HEAD
  <div class="order" style="margin-bottom:80px;">
    <van-tabs v-model="active">
=======
  <div class="order">
    <van-tabs>
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
      <van-tab title="全部订单">
        <briup-order-item v-for='item in orders' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
      <van-tab title="待支付">
        <briup-order-item v-for='item in ordersStatusFilter("待支付")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
<<<<<<< HEAD
      <van-tab title="待派单">
        <briup-order-item v-for='item in ordersStatusFilter("待派单")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
      <van-tab title="待接单">
        <briup-order-item v-for='item in ordersStatusFilter("待接单")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
      <van-tab title="待服务">
        <briup-order-item v-for='item in ordersStatusFilter("待服务")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
=======
      <van-tab title="待服务">
        <briup-order-item v-for='item in ordersStatusFilter("待服务")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
      <van-tab title="待评价">
        <briup-order-item v-for='item in ordersStatusFilter("待评价")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
      <van-tab title="已完成">
        <briup-order-item v-for='item in ordersStatusFilter("已完成")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
    </van-tabs>
<<<<<<< HEAD
    
  </div>
</template>
<script>
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
  data() {
    return {
      active:0
    };
=======
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return {
      active:1
    }
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
  },
  computed:{
    ...mapState('user',['info']),
    ...mapState('order',['orders']),
<<<<<<< HEAD
    // ...mapGetters('order', ['orderUnPay','orderUnSend','orderUnOrder','orderUnServe','orderFinish'])
    ...mapGetters('order', ['ordersStatusFilter'])
  },
  created(){
    this.findOrderById(this.info.id)
  },
  methods:{
    ...mapActions('order',['findOrderById'])
    
  },
=======
    ...mapGetters('order',['ordersStatusFilter']),
  },
  created(){
    this.findOrderByCustomerId(this.info.id)
  },
  methods:{
    ...mapActions('order',['findOrderByCustomerId'])
  }
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
}
</script>
<style scoped>

</style>