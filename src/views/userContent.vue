<template>
  <div>
    <div class="dis">
      <navigationBar/>
      <titleBar/>
      <router-view v-slot="{ Component }">
        <transition :name="transitionName">
            <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <!-- 遮罩层 -->
    <div class="mask">
      <div class="login-ui">
        <p style="">登陆天外天</p>
      </div>
    </div>
    <!-- <div class="err" style="position: absolute;text-align: center;background-color:#F7B888;width: 10vw;z-index: 6;" v-show="zoom">
      <p>您的浏览器缩放比例不是100%,可能会影响页面</p>
    </div> -->
    
    <!-- 此页面预留异形适配接口 -->
      <div class="udis">
        <NavigationBarLite/>
        <router-view/>
      </div>
    </div>
</template>

<script>

import navigationBar from '../components/navigationBar.vue'
import titleBar from '../components/titleBar.vue'
import LoginPop from '../components/loginPop.vue'
import NavigationBarLite from '@/components/navigationBarLite.vue'


export default {
    name:"userContent",
    components:{
    navigationBar,
    titleBar,
    LoginPop,
    NavigationBarLite,
},
data() {
  return {
    zoom:0,
    transitionName:"slide"
  }
},
watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      //console.log(to, "to");
      //console.log(from, "from");
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
  mounted(){
    //alert(this.$route.path);
    if(this.$route.path==="/"){this.$router.push("/RecentNews?id=0")}

    //if(this.detectZoom()!=100)alert("您的浏览器缩放比例不是100%,可能会影响页面")

    // this.$nextTick(()=>{                
    //             var p = navigator.platform;
    //             let mac = p.indexOf("Mac") === 0;
    //             let x11 = (p === "X11") || (p.indexOf("Linux") === 0);
    //             //判断当前系统
    //             if(p.indexOf("Win") === 0||mac||x11){
    //                 //监听缩放
    //                 window.addEventListener("resize", ()=> {
    //                   this.commonSySize();
    //                 })
    //                 //监听页面加载
    //                 window.addEventListener('load',()=>{
    //                     this.commonSySize();
    //                 })
    //             }
    //         });
  },

    methods:{
        //公共使用控制页面大小收缩
        commonSySize(){
            if(this.detectZoom()===100)this.zoom=1;
        },
        detectZoom() {
          let ratio = 0
          const screen = window.screen
          const ua = navigator.userAgent.toLowerCase()
          if (window.devicePixelRatio !== undefined) {
            ratio = window.devicePixelRatio
          } else if (~ua.indexOf('msie')) {
            if (screen.deviceXDPI && screen.logicalXDPI) {
              ratio = screen.deviceXDPI / screen.logicalXDPI
            }
          } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
            ratio = window.outerWidth / window.innerWidth
          }
          if (ratio) {
            ratio = Math.round(ratio * 100)
          }
          return ratio
    }
    }    
}
</script>

<style>
.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
      will-change: transform;
      transition: all 500ms;
      position: absolute;
    }

    .slide-right-enter {
      opacity: 0;
      /* transform: translate3d(-100%, 0, 0); */
    }

    .slide-right-leave-active {
      opacity: 0;
      /* transform: translate3d(100%, 0, 0); */
    }

    .slide-left-enter {
      opacity: 0;
      /* transform: translate3d(100%, 0, 0); */
    }

    .slide-left-leave-active {
      opacity: 0;
      /* transform: translate3d(-100%, 0, 0); */
    }




.main-user-content{
  position:absolute;
  left:293px;
  right:153px;
  margin-top: 94px;
  width:1625px;
  height: auto;
}

.udis{
  display: none;
}

.mask{
  position: absolute;
  z-index: 9;
  background-color: rgba(27, 27, 27, 0.645);
  width: 100vw;
  height: 100vh;

}

.login-ui{
  position: fixed;
  width: 512px;
  

  margin: 266px auto;
  margin-left: 464px;

  border-radius: 10%;
  background-color: white;

  text-align: center;
}




</style>