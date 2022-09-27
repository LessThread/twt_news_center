<template>
  <div class="navigation-bar">
    <div class="heading-twt-text">
      <img src="../assets/Vector.svg" class="title-icon-2" @click="iconToHome" style="cursor:pointer" />
      <img src="../assets/TWT_News.svg" class="title-icon-3" @click="iconToHome" style="cursor:pointer" />
    </div>
    <div v-for="(item ,index) in routers" :key="item.router" 
    :class="item.isCurrent?'main-routers-yes':'main-routers-no'" 
    @click="to(item.router,item.id)">
      <img :src="item.src" class="router-icon"/>
      <p class="main-routers-text" v-show="1" :id="'router'+index" :class="{'isfontWeight':item.isCurrent}" >{{item.name}}</p>
    </div>
    
  </div>
</template>

<script>
import global from '@/global.vue';
import "../assets/flag.svg"

export default {
    name:"navigationBar",
    methods:{
      to(router,id){
        this.$router.push("/RecentNews?id="+id);
      },
      iconToHome(){0
        this.$router.push("/RecentNews?id=0");
      }

    },
    data(){
      return{
        if_navigation_show:1,
        iconBox:[
          require('../assets/pen-tool.svg'),
          require('../assets/flag.svg'),
          require('../assets/radio.svg'),
          require('../assets/tag.svg'),
          require('../assets/file-minus.svg'),
        ],
        routers:[
          {name:"全部",router:"/",src:require('../assets/calendar.svg'),id:0},
        ],

      }
    },
    mounted()
    {
      fetch(global.rooturl+"cate/all")
      .then(res=>res.json())
      .then(data=>{
        for(let i=0;i<data.result.length;i++){
          //console.log(this.iconBox[data.result[i].id%5])
            this.routers.push({
              name:data.result[i].name,
              id:data.result[i].id,
              src:this.iconBox[data.result[i].id%5],
              isCurrent: 0,
          })
        }
      })
    },
    watch:{
      '$route':function(newVal,oldVal)
      {
        let newUrl = newVal.href;
        let oldUrl = oldVal.href;
        
        if((newUrl.indexOf("RecentNews")!=-1)&&(oldUrl.indexOf("RecentNews")!=-1))
        {
          newUrl=newUrl.slice(newUrl.indexOf("?")+4);
          oldUrl= oldUrl.slice( oldUrl.indexOf("?")+4);
          this.routers[newUrl].isCurrent=1;
          this.routers[oldUrl].isCurrent=0;
          console.log("case1");
        }
        
        else if((newUrl.indexOf("RecentNews")!=-1)&&(oldUrl.indexOf("RecentNews")==-1))
        {
          return;
        }
        
        else if((newUrl.indexOf("RecentNews")==-1)&&(oldUrl.indexOf("RecentNews")!=-1))
        {
          oldUrl= oldUrl.slice( oldUrl.indexOf("?")+4);
          this.routers[oldUrl].isCurrent=0;
        }
      }

    }
}
</script>

<style scoped>
/*.main-routers-yes{
  background-color: #F0F0F0;
  color: #2A2A2A;
}
}*/
.navigation-bar{
  position:fixed;
  top:0;
  left:0;
  width:293px;
  height:100%;
  background: #FAFAFA;
}
.heading-twt-text{
  height:94px;
  display:flex;
  flex-direction:row;
  align-items:center;
}



[class^="title-icon-"]{
  margin-left:9px;
}
.title-icon-1{height:auto;cursor:pointer;margin-left:8.5%;}
.title-icon-2{height:35px;width:30px ;margin-left: 30px;}
.title-icon-3{height:44px;width: 168px;margin-left: 15px;}
.main-routers-yes{
  display:flex;
  height:7%;
  width:100%;
  align-items:center;
  cursor:pointer;
  background:#F0F0F0;
  transition: all .15s;
  color: 2A2A2A;
}
.main-routers-no{
  display:flex;
  height:7%;
  width:100%;
  align-items:center;
  opacity: .7;
  cursor:pointer;
  transition:all .15s;
  color:#767676;
  background-color:#FAFAFA ;
}
.router-icon{
  margin-left: 30px;
  width: 24px;
}
.main-routers-text{
  margin-left:16px;
  font-weight: 400; 
  font-size: 20px;
}

.main-routers-text:hover{
  text-decoration: dashed;
  font-weight:bold;
}

</style>