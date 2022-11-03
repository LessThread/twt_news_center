<template>
    <div class="display">
        <div class="header-img-container" v-show="headImg">
            <img :src="this.global_rooturl+'imgbed/download/'+headImg"/>
        </div>

        <div class="title">
        {{title}}
        </div>

        <div class="text-container">
            <div class="header-container">
                <div class="class-container">
                {{'来源：'+ class_}}&ensp;&ensp;&ensp;&ensp;
                {{'供稿：'+ _writer}}&ensp;&ensp;&ensp;&ensp;
                {{'供图：'+ _photographer}}
                </div>

                <div class="writer-container">
                </div>

                <div class="reader">
                </div>

                <div class="time-container" style="font-family: 'Product-Sans'">
                阅读量：{{reader}}&ensp;&ensp;&ensp;&ensp;
                {{time_s}}
                </div>
            </div>

            <div class="content-container" style="max-width: 95%;">
                <v-md-preview :text="content_s" style="max-width: 110%;"></v-md-preview>
                <!-- <div class="text-child" v-html="content_s"></div> -->
            </div>
        </div>

        <br/>

    </div>
</template>

<script>
import global from '@/global.vue'
import { indexOf } from 'lodash'

export default{
    name:"Display",
    data() {
        return {
            global_rooturl:global.rooturl,
            // _photographer:String,
            // _writer:String,
        }
    },
    props:{
        title:String,
        headImg:String|Number,
        class_:String,
        writer:String,
        time:String,
        content: String,
        reader:String|Number
    },
    components:{
    global,
},
    watch:{
        // time:{
        //         handler(newVal,oldVal)
        //         {
        //             this.time_s=newVal.slice(0,10);
        //         },
        //         //immediate:true,//immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的                    
        //         deep:true,
        //     },
    },
    computed:{
        content_s(){
            //console.log(this.content)
            if(this.content!=null) return this.content
            else return "加载中"
        },
        time_s(){
            if(this.time!=null)  {
                let temp=this.time;
                return this.time.slice(0,10);
            }
        },
        _writer(){
            if(this.writer!=null)
            {
                if(this.writer.indexOf("$")!=-1)return this.writer.slice(0,this.writer.indexOf("$"));
                else return this.writer
            }
        },
        _photographer()
        {
            if(this.writer!=null)
            {
                if(this.writer.indexOf("$")!=-1)return this.writer.slice(this.writer.indexOf("$")+1);
                else return "暂无"
            }
            
        }
    },
    created() {
        scrollTo(0,0);
    },
}
</script>

<style scoped>
.display{
    width: 1321px;
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.header-img-container{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 1321px;
    height: 420px;
    overflow: hidden;
    border:1px rgba(0, 0, 0, 0.1) solid;
    border-radius:20px;
    max-height: 400px;
    /*box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
    border-style: solid;
    border-width: 1pt;
    border-color: #f0f0f0;
}

.header-img-container>img{
    width: 100%;
    background: #FFFFFF;
}

.title{
    margin-top: 1.5%;
    font-size: 40px;
    color: rgb(84, 85, 86);
    width: 90%;

}

.text-container{
    width: 100%;
    height: auto;
    overflow: hidden;
}

.header-container{
    display: flex;
    justify-content: space-between;
    width: 89.5%;
    color:rgb(100, 103, 103);
    margin:1% auto;

}

.content-container{
    display:flex;
    flex-direction: column;
    align-items:center;
    margin: 1% auto;
}

.content-container>img{
    border-radius: 15px;
}

.text-child{
    margin-top:2%;
}
</style>