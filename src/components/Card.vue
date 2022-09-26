<template>
<div class="Card">
  <div class="InfoCard" v-if="type" @click="this.$router.push('/ArticleDisplay?='+url)">
      <div class="img_box">
        <img class="img" :src="local_img" />
      </div>


      <div class="text" @click="this.$router.push('/ArticleDisplay?='+url)" style="font-weight:bold;">
        <a>{{words}}</a>
      </div>
        

      <div class="script">
        <div class="script_class" >
          {{!Top?NewsClass:""}}
        </div>
        <div class="script_time" style="font-family: 'Product-Sans';font-size: 14px;">
          {{NewsTime}}
        </div>
      </div>

      <div class="top" v-if="Top">
            <div>置顶</div>
      </div>

      <br/>
  </div>

  <div class="TxtCard" v-if="!type">
      <div class="blank" style="min-height:10px">
      </div>
        
        <div class="text" @click="this.$router.push('/ArticleDisplay?='+url)">
        <a>{{words}}</a>  
        </div>
        
        <!-- <div class="blank">
        </div> -->

        <div class="script">
        <div class="script_class">
          {{!Top?NewsClass:""}}
        </div>
        <div class="script_time" style="font-family: 'Product-Sans';font-size: 14px;">
          {{NewsTime}}
        </div>
      </div>

      <div class="top" v-if="Top">
            <div>置顶</div>
      </div>

      <!-- <div class="blank">
      </div> -->
      <br/>
  </div>
  
</div>
</template>

<script>
import global from '@/global.vue'

export default {


  name: 'Card',
  data()
  {
    return{
      global_root:global.rooturl,
      local_img:String,
      type:Number
    }
  },

  props: {
    img: String | Number,
    words: String,
    NewsClass: String,
    NewsTime: String,
    Top: Number,
    url: Number,
  },

  created() {
    this.local_img=this.img;
    if(this.local_img!="text")
    {
      this.local_img=this.global_root+'imgbed/download/'+this.local_img
    }
    else{
      this.type=0;
    }
  },
}
</script>

<style scoped>
.Card{
  margin: 5% auto;
  cursor:pointer;
  height: auto;
  min-width: 100px;
  animation: FadeInOut ease 2s; 
  animation-iteration-count: 1; /*设置动画播放次数*/
  animation-fill-mode: forwards;
}

.InfoCard{
  /* min-width: 12vw; */
  position: absolute;
  width: 304px;
  height: auto;
  border-style: none;
  border-radius: 15px;
  min-height: 20vh;
  background-color: rgb(244, 246, 247); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /*box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
  border-style: solid;
  border-width: 1pt;
  border-color: #f0f0f0;
  
}

.TxtCard{
  width: 304px;
  height: auto;
  border-style: none;
  border-radius: 15px;
  min-height: 10vh;
  background-color: rgb(244, 246, 247);
  /*box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
  border-style: solid;
  border-width: 1pt;
  border-color: #f0f0f0;
}

.InfoCard .img_box
{
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width:304px;
  height: 171px;
  overflow: hidden;
}
.InfoCard .img
{
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  margin-top:0%;
}


.Card .blank
{
  margin-top: 6%;
  min-height: 1px;
}

.Card .text
{
  width: 264px;
  margin: 0 auto;
  font-size: 25px;
  text-align: left;
  margin-top: 8%;
  margin-bottom: 10%;
}

.Card .script
{
  width: 264px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
.Card .script>div
{
  font-size: 10px;
  color: rgb(118, 119, 119);
}

.Card .TxtCard .top{
  border-radius:3px;
  border: solid;
  border-color: rgb(9, 120, 199);
  border-width: 2px;
  color: rgb(9, 120, 199);

  width: 8%;
  position:relative;
  left:10%;
  margin-top: -5%;
  font-size: 8px;
  text-align: center;
}

.Card .InfoCard .top
{
  border-radius:3px;
  border: solid;
  border-color: rgb(9, 120, 199);
  border-width: 2px;
  color: rgb(9, 120, 199);

  width: 8%;
  position:absolute;
  bottom:6%;
  left:10%;
  font-size: 8px;
  text-align: center;
}

.Card a
{
  color: rgb(52, 51, 51);
  text-decoration: none;
}

.Card a:hover
{
  text-decoration: underline; 
} 

.script_class{
  white-space: nowrap;
  text-align: left;
}
.script_time{
  white-space: nowrap;
}

.Card .TxtCard .script{
  margin-left: 10.5%;
}

@keyframes FadeInOut{
  0%{opacity: 0;}
  100%{opacity: 1;}
}
</style>