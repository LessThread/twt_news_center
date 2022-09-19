<template>
  <div class="login-pop">
    <p class="login-twt">登录天外天</p>
    <input type="text" placeholder="天外天账号/手机号/学号" class="input-username"/>
    <p class="relative-text-input">还没有账号？</p>
    <div class="input-password-box">
        <input :type="if_password_eyes?'text':'password'" placeholder="密码" class="input-password"/>
        <img src="../assets/eye.svg" class="password-icon" 
        v-show="if_password_eyes" @click="if_password_eyes=0;"/>
        <img src="../assets/eye-off.svg" class="password-icon" 
        v-show="!if_password_eyes" @click="if_password_eyes=1;"/>
    </div>
    <p class="relative-text-input">忘记密码？</p>
    <button class="login-button">登录</button>
    <img src="../assets/x.svg" class="login-pop-close" @click="this.$store.state.if_mask_layer=0;"/>
  </div>
</template>

<script>
export default {
    name:"loginPop",
    data(){
        return{
            if_password_eyes:0
        }
    }
}
</script>

<style scoped>
.login-pop{
    position:fixed;
    width:25%;
    height:40%;
    z-index:10;
    background:#FFFFFF;
    top:30%;
    left:37.5%;
    border-radius:1rem;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.login-twt{
    font-size:1.4em;
    margin-top:6%;
}
.input-username{
    width:82%;
    height:15%;
    margin-top:5%;
    border:0;
    border-radius:.5rem;
    background:#F0F0F0;
    padding-left:3%;
    font-size:.95rem;
    outline:none;
}
.relative-text-input{
    display:flex;
    justify-content: flex-end;
    width:85%;
    font-size:.5rem;
    margin-top:1.5%;
    color:#00A0E9;
    cursor:pointer;
}
.input-password-box{
    width:85%;
    height:15%;
    margin-top:2%;
    background:#F0F0F0;
    border-radius:.5rem;
    display:flex;
    align-items:center;
}
.input-password{
    height:80%;
    width:83%;
    border:0;
    background:0;
    outline:0;
    padding-left:3%;
    font-size:.95rem;
}
.password-icon{
    height:50%;
    cursor:pointer;
}
.login-pop-close{
    position:absolute;
    top:5%;
    right:5%;
    height:8%;
    cursor:pointer;
}
.login-button{
    width:25%;
    height:16%;
    border-radius:.8rem;
    letter-spacing: .5rem;
    text-indent: .5rem;
    font-size:1.1rem;
    margin-top:2%;
}
</style>