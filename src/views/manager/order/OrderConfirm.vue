<template>
    <div class="confirm">
        <briup-fulllayout title='订单确认'>
            <div class="wrapper" style='margin:1.5em'>
                <van-row @click='pickAddressHandler'>
                    <van-col span="4">
                        <van-icon size='26' class-prefix="iconfont icon-dizhi" name="extra" />
                    </van-col>
                    <van-col span="18">
                        <div>服务地址</div>
                        <div v-if='addresses.length !== 0'>{{addresses[0].province}} {{addresses[0].city}} {{addresses[0].area}} {{addresses[0].address}}</div>
                    </van-col>
                    <van-col span="2">
                        <van-icon size='26' class-prefix="iconfont icon-youjiantou" name="extra" />
                    </van-col>
                </van-row>

                <van-row>
                    <van-col span="4">
<<<<<<< HEAD
                        <van-icon size='26' class-prefix="iconfont icon-dingdan-" name="extra" />
=======
                        <van-icon size='26' class-prefix="iconfont icon-dingdan" name="extra" />
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
                    </van-col>
                    <van-col span="20">
                        <div>订单详情</div>
                        <div v-for='item in orderLine.values()' :key='item.id'>
<<<<<<< HEAD
                            <van-row >
                                <van-col span='16'>{{item.productName}}</van-col>
                                <van-col span='4'>x {{item.number}}</van-col>
                                <van-col span='4'>￥ {{item.price}}</van-col>
                            </van-row>
                        </div>
                        <div style="text-align:right;padding:0 1.5em">总额：￥{{total}}</div>
                    </van-col>
                </van-row>

                <van-row >
=======
                            <van-row>
                                <van-col span="16">{{item.productName}}</van-col>
                                <van-col span="4">x {{item.number}}</van-col>
                                <van-col span="4">￥ {{item.price}}</van-col>
                            </van-row>
                        </div>
                        <div style='text-align:right;padding:0 1.5em'>总额：￥ {{total}}</div>
                    </van-col>
                </van-row>

                <van-row>
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
                    <van-col span="4">
                        <van-icon size='26' class-prefix="iconfont icon-shijian" name="extra" />
                    </van-col>
                    <van-col span="18">
                        <div>服务时间</div>
<<<<<<< HEAD
                        {{currentTime}}
                        <div>
                            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
                                <van-datetime-picker
                                v-model="currentTime"
                                type="time"
                                @confirm='successHandler'
                                title="选择时间"
                                :min-hour="10"
                                :max-hour="20"
                                />  
=======
                        <div>
                            {{currentTime}}
                            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                                <van-datetime-picker
                                    v-model="currentTime"
                                    type="time"
                                    @confirm='closeModel'
                                    title="选择时间"
                                    :min-hour="10"
                                    :max-hour="20"
                                />
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
                            </van-popup>
                        </div>
                    </van-col>
                    <van-col span="2">
<<<<<<< HEAD
                        <van-icon @click='pickTimeHandler' size='26' class-prefix="iconfont icon-youjiantou" name="extra" />
=======
                        <!-- 将打开模态框的事件绑定在右箭头上,否则模态框无法关闭 -->
                        <van-icon @click="pickTimeHandler" size='26' class-prefix="iconfont icon-youjiantou" name="extra" />
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
                    </van-col>
                </van-row>

                <van-row>
                    <van-col span="4">
                        <van-icon size='26' class-prefix="iconfont icon-zhifu" name="extra" />
                    </van-col>
                    <van-col span="18">
                        <div>支付方式</div>
                        <div>支付方式</div>
                    </van-col>
                    <van-col span="2">
                        <van-icon size='26' class-prefix="iconfont icon-youjiantou" name="extra" />
                    </van-col>
                </van-row>

                <van-button type="primary" block @click='saveOrderHandler'>确认支付</van-button>
<<<<<<< HEAD
=======

>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
            </div>
        </briup-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
<<<<<<< HEAD
// 轻提示
import {Toast} from 'vant'

=======
import {Toast} from 'vant'
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
export default {
    data(){
        return {
            show:false,
<<<<<<< HEAD
            currentTime:'12:00'
=======
            currentTime:''
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
        }
    },
    computed:{
        ...mapState('user',['info']),
        ...mapState('address',['addresses']),
        ...mapState('shopcar',['orderLine']),
<<<<<<< HEAD
        ...mapGetters('shopcar',['total'])
=======
        ...mapGetters('shopcar',['total']),
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
    },
    created(){
        this.findAddressById(this.info.id)
    },
    mounted(){
        // console.log(JSON.stringify(this.$route.query) === '{}')
        // 如果路由携带参数为空对象时，说明从产品页面跳转至订单确认页面
        // 如果路由携带参数不为空对象时，说明从地址页面跳转至订单确认页面
        if(JSON.stringify(this.$route.query) !== '{}'){
            setTimeout(()=>{
                this.addresses[0].province = JSON.parse(this.$route.query.address).province
                this.addresses[0].city = JSON.parse(this.$route.query.address).city
                this.addresses[0].area = JSON.parse(this.$route.query.address).area
                this.addresses[0].address = JSON.parse(this.$route.query.address).address
            },300)
        }
    },
    methods:{
<<<<<<< HEAD
        ...mapActions('address',['findAddressById']), 
        ...mapActions('order',['saveOrder']), 
        // 保存订单事件
        saveOrderHandler(){
            if(JSON.stringify(this.$route.query)!=='{}'){
                // 从地址列表页面选择完地址后，从浏览器地址栏获取地址id
=======
        ...mapActions('address',['findAddressById']),
        ...mapActions('order',['saveOrder']),
        // 保存订单
        saveOrderHandler(){
            if(JSON.stringify(this.$route.query) !== '{}'){
                // 从地址列表页面选择完地址后,从浏览器地址栏上获取地址id
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
                var obj = {
                    addressId:JSON.parse(this.$route.query.address).id,
                    customerId:this.info.id,
                    orderLines:Array.from(this.orderLine.values())
<<<<<<< HEAD
                }    
            }else{
=======
                }
            } else {
                // 从产品页面进来,选择默认第一个地址的id
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
                var obj = {
                    addressId:this.addresses[0].id,
                    customerId:this.info.id,
                    orderLines:Array.from(this.orderLine.values())
<<<<<<< HEAD
                } 
            }
             this.saveOrder(obj).then((res)=>{
=======
                }
            }
            this.saveOrder(obj).then((res)=>{
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
                Toast(res.statusText)
                this.$router.push({
                    path:'/manager/order'
                })
            })
<<<<<<< HEAD
            
=======
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
        },
        // 跳转至地址列表页面
        pickAddressHandler(){
            this.$router.push({
                path:'/manager/address'
            })
        },
<<<<<<< HEAD
        // 时间选择
        pickTimeHandler(){
            this.show=true
        },
         // 时间选择完成事件
        successHandler(){
            this.show=false
=======
        // 时间选择模态框
        pickTimeHandler(){
            this.show = true;
        },
        // 时间选择完成
        closeModel(){
            this.show = false
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
        },
    }
}
</script>

<style scoped>
    .wrapper .van-row {
        margin-bottom: 2em;
    }
</style>