<template>
    <div class="login-ui">
        <p class="title">登陆天外天</p>

        <el-input class="input-box" 
        v-model="username" 
        placeholder="请输入用户名" 
        />

        <el-link type="primary">还没有账号？</el-link>

        <el-input class="input-box" v-model="username" 
        type="password"
        placeholder="请输入密码"
        show-password
        />

        <el-link type="primary">忘记密码？</el-link><br>

        <el-button type="primary">登录</el-button>
    </div>
</template>

<script>
export default{
    data() {
        return {
            username:"",
            passwd:"",
        }
    },
}
</script>

<style scoped>
.login-ui{
    position: fixed;
    display:block;

    width: 512px;
    height: 383px;
    
    margin-top: 266px;
    margin-left: 764px;

    border-radius: 16px;
    background-color: white;

    text-align: center;
}

.title{
    margin-top: 30px;
    font-size:36px;

}

.input-box{
    margin-top: 25px;
    width: 452px;
    height: 50px;
}
</style>