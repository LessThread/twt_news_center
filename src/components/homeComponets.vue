<template>
  <div>
      <userRot
        :list="RotationList"
        />
      
      <div class="CardBox">

        <div id="box_left" class="CardBoxSon" >
          <div v-for="item in boxLeft" class="cBoxL cBox" :key="item.id" v-show="item.categoryId==filter||filter=='0'">
            <Card
            :img="item.coverImageId"
            :words="item.title"
            :NewsClass="item.class"
            :NewsTime="item.releaseTime.slice(0,-9)"
            :url="item.id"
            :Top="item.status"
            />
          </div>
        </div>

        <div id="box_middle" class="CardBoxSon">
          <div v-for="item in boxMiddle" class="cBoxM cBox" :key="item.id" v-show="item.categoryId==filter||filter=='0'">
            <Card
            :img="item.coverImageId"
            :words="item.title"
            :NewsClass="item.class"
            :NewsTime="item.releaseTime.slice(0,-9)"
            :url="item.id"
            :Top="item.status"
            />
          </div>
        </div>

        <div id="box_right" class="CardBoxSon">
          <div v-for="item in boxRight" class="cBoxR cBox" :key="item.id" v-show="item.categoryId==filter||filter=='0'" >
            <Card
            :img="item.coverImageId"
            :words="item.title"
            :NewsClass="item.class"
            :NewsTime="item.releaseTime.slice(0,-9)"
            :url="item.id"
            :Top="item.status"
            />
          </div>
        </div>

        <div id="box_plus" class="CardBoxSon">
          <div v-for="item in boxPlus" class="cBoxR cBox" :key="item.id" v-show="item.categoryId==filter||filter=='0'" >
            <Card
            :img="item.coverImageId"
            :words="item.title"
            :NewsClass="item.class"
            :NewsTime="item.releaseTime.slice(0,-9)"
            :url="item.id"
            :Top="item.status"
            />
          </div>
        </div>
        
      </div>
      <copyright/>
      
  </div>
</template>

<script>
import userRot from '@/components/twtRotation.vue'
import Card from '@/components/Card.vue'
import global from '@/global.vue'
import copyright from '@/components/copyright.vue'
import { CLOSING } from 'ws'
export default 
{
    name:"HomeComponets",
    props:{
      filter: {
            type: String,
            default: ""
        },
    },
    data() 
    {
      return {
        global_root:global.rooturl,
        img1:0,
        RotationList: [],
        News:[],
        TNews:[],
        boxRight:[],
        boxMiddle:[],
        boxLeft:[],
        boxPlus:[],
      }
    },
    components:
    {
    userRot,
    Card,
    global,
    copyright,
},
    methods:
    {
    },
    created()
    {
            //边栏分类获取，但是实际使用也存在于在边栏组件里，这里是用来替换分类的信息，
      //以便后期更改分类留接口
      //...
      fetch(global.rooturl+"cate/all/")
      .then(res=>res.json())
      .then(data=>{
        let inf=data.result;

        for(let i=0;i<this.News.length;i++)
        {
          for(let u=0;u<inf.length;u++)
          {
            console.log("found0")
            if(inf[u].id==this.News[i].categoryId)
            {
              console.log("found")
              this.News[i].class=inf[u].name;
            }
          }

        }
      })


      //置顶文章获取
      fetch(global.rooturl+"art/select/summary/top/")
      .then(res=>res.json())
      .then(res=>{this.TNews = res.result.reverse();})
      .then(()=>{
            for(let i=0;i<this.TNews.length;i++){

              if(this.TNews[i].coverImageId===0||this.TNews[i].coverImageId===null){this.TNews[i].coverImageId="text";}

              if(i%4==0){this.boxLeft.push(this.TNews[i])}
              else if(i%4==1){this.boxMiddle.push(this.TNews[i])}
              else if(i%4==2) {this.boxRight.push(this.TNews[i])}
              else {this.boxPlus.push(this.TNews[i])}
            }
      })
      .then(()=>{
        //非置顶文章获取
            fetch(global.rooturl+"art/select/summary/nor/")
              .then(res=>res.json())
              .then(res=>{this.News = res.result.reverse();})
              .then(()=>{

                fetch(global.rooturl+"cate/all/")
                .then(res=>res.json())
                .then(data=>{
                  let inf=data.result;

                  for(let i=0;i<this.News.length;i++)
                  {
                    for(let u=0;u<inf.length;u++)
                    {
                      if(inf[u].id==this.News[i].categoryId)
                      {
                        this.News[i].class=inf[u].name;
                      }
                    }

                  }
                })
                .then(()=>{
                  for(let i=0;i<this.News.length;i++)
                  {
                    if(this.News[i].coverImageId===0||this.News[i].coverImageId===null){this.News[i].coverImageId="text";}
                    if(i%4==0){this.boxLeft.push(this.News[i])}
                    else if(i%4==1){this.boxMiddle.push(this.News[i])}
                    else if(i%4==2) {this.boxRight.push(this.News[i])}
                    else{this.boxPlus.push(this.News[i])}
                  }
                })
              
              })
      })

      

      //轮播图获取
      fetch(global.rooturl+"crs/select/")
      .then(res=>res.json())
      .then(data=>{
          for(let i=0;i<4;i++){
            if(data.result[i].imageId!==0)
            this.RotationList.push({
              imgPath:global.rooturl+'imgbed/download/'+data.result[i].imageId,
              header:data.result[i].title,
              url:data.result[i].articleId,
              time:data.result[i].createDate,
              summary:data.result[i].summary,
            })
          }
      })


    },
    mounted(){
      fetch(global.rooturl+"crs/select/")
            .then(res=>res.json())
            .then(data=>{
                
            })
    },

    beforeUpdate(){
      this.boxRight.splice(0);
      this.boxMiddle.splice(0);
      this.boxLeft.splice(0);
      this.boxPlus.splice(0);

      let boxPtr=0;
      for(let i=0;i<this.TNews.length;i++)
      {
        
        if(this.TNews[i].coverImageId===0||this.TNews[i].coverImageId===null){this.TNews[i].coverImageId="text";}
        if(this.TNews[i].categoryId==this.filter||this.filter=='0')
        {
          if(boxPtr%4===0){this.boxLeft.push(this.TNews[i]);boxPtr++;}
          else if(boxPtr%4===1) {this.boxMiddle.push(this.TNews[i]);boxPtr++;}
          else if(boxPtr%4===2) {this.boxRight.push(this.TNews[i]);boxPtr++;}
          else{this.boxPlus.push(this.TNews[i]);boxPtr++;}
        }
        
      }

      //boxPtr=0;
      for(let i=0;i<this.News.length;i++)
        {
          
          if(this.News[i].coverImageId===0||this.News[i].coverImageId===null){this.News[i].coverImageId="text";}
          if(this.News[i].categoryId==this.filter||this.filter=='0')
          {
            if(boxPtr%4==0){this.boxLeft.push(this.News[i]);boxPtr++;}
            else if(boxPtr%4==1){this.boxMiddle.push(this.News[i]);boxPtr++;}
            else if(boxPtr%4==2) {this.boxRight.push(this.News[i]);boxPtr++;}
            else{this.boxPlus.push(this.News[i]);boxPtr++;}
          }
          
        }

    }

}
</script>

<style scoped>
.CardBox{
  margin:35px auto;
  width: 1321px;
  display: flex;
  /* min-width: 70vw; */
  justify-content: space-between;
  position: relative;
}



.CardBox .CardBoxSon{
  min-width: 304px;
}

.cBox{
  width: 100%;
}

.cBoxL{
  padding: auto;
}
.cBoxM{
  margin: 0 auto;
}



</style>