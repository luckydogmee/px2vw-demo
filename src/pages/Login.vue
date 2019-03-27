<template>
    <div>
        <div class="logo">logo</div>
        <div>
            <div class="form-control" :class="{focus: focusItem === 'account'}">
                <label for="account">
                    <img src="@/assets/icon/account.png" alt="" srcset="">
                </label>
                <input type="text" name="account" ref="account" placeholder="输入账号" @focus="focusItem = 'account'" v-model="account">
            </div>
            <div class="form-control" :class="{focus: focusItem === 'password'}">
                <label for="password">
                    <img src="@/assets/icon/password.png" alt="" srcset="">
                </label>
                <input type="text" name="password" ref="password" placeholder="输入密码" @focus="focusItem = 'password'" v-model="password">
            </div>
            <div class="form-control" :class="{focus: focusItem === 'verification'}">
                <label for="verification">
                    <img src="@/assets/icon/verification.png" alt="" srcset="">
                </label>
                <input type="text" name="verification" ref="verification" placeholder="输入验证码" @focus="focusItem = 'verification'" v-model="verification">
                <img class="verification" src="@/assets/icon/verification.png"/>
            </div>
            <div class="error-info">
                <ul>
                    <li v-for="item in errors" :key="item">{{item}}</li>
                </ul>
            </div>
            <yButton class="login-btn" borderRadius="44px" type="primary" size="large" @click="login" :disabled="disable">登 录</yButton>
            <yButton >查看详情</yButton>
            <yButton type="normal" >查看详情</yButton>
            <yButton type="primary">查看详情</yButton>
            <yNumber></yNumber>
        </div>    
    </div>
</template>

<script>
import yButton from '@/components/yButton'
import yNumber from '@/components/yNumber'
export default {
    name:'login',
    data(){
        return {
            account:'',
            password:'',
            verification:'',
            focusItem:'',
            errors:[]
        }
    },
    mounted(){
        this.$api.get('baidu.com')
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    },
    components:{
        yButton,
        yNumber
    },
    computed:{
        disable(){
            if(this.account&&this.password&&this.verification && this.errors.length===0){
                return false
            }
            return true
        }
    },
    methods:{
        login(){
            this.$router.push({'name':'home'})
        },
    }
}
</script>

<style lang="less" scoped>
    @import '../styles/base.less';
    .logo{
        width:160px;
        height:100px;
        background:rgba(80,167,73,1);
        border-radius:16px;
        margin: 60px auto;
        line-height: 100px;
        color: #fff;
    }
    .login-btn{
        margin-top: 60px;
    }
    .form-control{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 620px;
        margin: 0 auto;
        height: 100px;
        border-bottom: 2px solid #F5F5F5;
        label{
            width: 100px;
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
            img{
                width: 30px;
            }
        }
        input{
            font-size:27px;
            height:80px;
            flex: 1;
            font-weight: 400;
            &::placeholder{
                color: #AAAAAA;
            }
        }
        .verification{
            height: 52px;
            width: 160px;
            
        }
        &.focus{
            border-bottom: 2px solid @theme-base-color;
        }
    }
    .error-info{
        ul{
            margin-bottom: 0;
        }
        li{
            font-size: 20px;
            line-height: 30px;
            color: red;
            padding-left: 30px;
        }
    }
</style>
