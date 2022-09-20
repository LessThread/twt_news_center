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
                {{'供稿：'+ writer}}
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

            <div class="content-container">
                <v-md-preview :text="content_s"></v-md-preview>
                <!-- <div class="text-child" v-html="content_s"></div> -->
            </div>
        </div>

        <br/>

    </div>
</template>

<script>
import global from '@/global.vue'

export default{
    name:"Display",
    data() {
        return {
            global_rooturl:global.rooturl,
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
            console.log(this.content)
            if(this.content!=null) return this.content
            else return "加载中"
        },
        time_s(){
            if(this.time!=null)  {
                let temp=this.time;
                return this.time.slice(0,10);
            }
        }
    }
}
</script>

<style scoped>
.display{
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-img-container{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 30vh;
    overflow: hidden;
    border:1px rgba(0, 0, 0, 0.1) solid;
    border-radius:2vh;
}

.header-img-container>img{
    width: 60%;
    padding-left:20%;
    padding-right:20%;
    background: #FFFFFF;
}

.title{
    margin-top: 1.5%;
    font-size: 40px;
    color: rgb(84, 85, 86);
    width: 94%;
}

.text-container{
    width: 94%;
}

.header-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1.5%;
    color:rgb(100, 103, 103);
}

.content-container{
    margin-top: 1.5%;
    display:flex;
    flex-direction: column;
    align-items:center;
}

.content-container>img{
    border-radius: 15px;
}

.text-child{
    margin-top:2%;
}
</style>