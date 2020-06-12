<template>
    <div class="register">
        <van-cell-group>
            <van-field
            v-model="form.username"
            required
            clearable
            label="用户名"
            icon="question-o"
            placeholder="请输入用户名"
            />
            
            <van-field
            v-model="form.password"
            type="password"
            label="验证码"
            placeholder="请输入验证码"
            required>
                <template #button>
                    <van-button size="small" type="primary" @click="getVcodeHandler">发送验证码</van-button>
                </template>
            </van-field>

            <van-field
            v-model="form.username"
            required
            clearable
            label="密码"
            icon="question-o"
            placeholder="请输入密码"
            />
        </van-cell-group>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                form:{}
            }
        },
        methods:{
            ...mapActions('register',['getVcode']),
            // 获取验证码
            getVcodeHandler(){
                this.getVcode(this.form.telephone).then((res)=>{
                    console.log(res)
                })
            }
            //获取验证码之后调用 customer/customerRegister接口  进行注册
        }
    }
</script>