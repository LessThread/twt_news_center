<template>
  <div class="title-bar">
    <div class="search-box" v-show="1">
        <img src="../assets/search.svg" class="search-icon"/>
        <input  @keyup.enter='search' type="text" class="search-input" :placeholder="some_text" @change="search" readonly="readonly" style=" opacity: 0.6;cursor: not-allowed;" />
    </div>
    <!-- <div class="twt-getting-box"> -->
      <!-- <p class="twt-getting-text">天外天 · 纳新进行中</p> -->
      <!-- <p class="twt-getting-hot">Hot</p> -->
    <!-- </div> -->
    <p class="twt-other-routers" v-show="1"><a href="https://www.twt.edu.cn/home/" class="link" target="_blank" style="cursor: help;">工作室官网</a></p>
    <!-- <p class="twt-other-routers" style=" opacity: 0.6;cursor: not-allowed;">关于我们</p>
    <p class="twt-other-routers" v-show="1" style=" opacity: 0.6;cursor: not-allowed;">投稿</p>
    <button class="login-button" v-show="1" style=" opacity: 0.6;cursor: not-allowed;">登录</button> -->
  </div>
</template>

<script>
import global from '@/global.vue';
export default {
  name:"titleBar",
  data(){
    return{
      some_text:""
    }
  },
  methods:{
    search(e){
      console.log(e.currentTarget.value)
      let req=e.currentTarget.value;
      if(!req){
        alert("请键入您需要搜索的关键词")
        return;
      }
      else{
        this.$router.push('/SearchResult?='+req)
      }
      
    }
  }
}
</script>

<style>
.title-bar{
  position:absolute;
  left:293px;
  top:0;
  height:94px;
  width:1625px;
  display:flex;
  align-items:center;
  justify-content: space-between;
}
.search-box{
  background:#F0F0F0;
  width:374px;
  height:30px;
  border-radius:3vh;
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-left: 153px;
}
.search-icon{
  width:24px;
  margin-left:2%;
  margin-right:2%;
}
.search-input{
  width:85%;
  outline: 0;
  border:0;
  background:0;
  font-size:100%;
}
.twt-getting-box{
  position: relative;
  height:40%;
  display:flex;
  align-items:center;
  margin-left:10%;
}
.twt-getting-text{
  font-size:100%;
  color:#00A0E9;
}
.twt-getting-hot{
  position:absolute;
  top:-25%;
  right:-17%;
  font-size:6%;
  color:#00A0E9;
  background:#F0F0F0;
  padding:1%;
  border-radius:.5rem;
}
.twt-other-routers{
  color:#2A2A2A;
  margin-left:5%;
}
.login-button{
  color:#FFFFFF;
  background:#00A0E9;
  width:6%;
  height:42%;
  border:0;
  border-radius:3vh;
  font-size:100%;
  cursor:pointer;
  margin-left: 2%;
}
</style>

<style scoped>
  .link{
    text-decoration: none;
    color: black;
    margin-right: 153px;
  }
</style>