    <template>
        <div class="navigation-bar">
        <div class="heading-twt-text">
            <img src="../assets/Vector.svg" class="title-icon-2"/>
            <!-- <img src="../assets/TWT_News.svg" class="title-icon-3"/> -->
        </div>
        <div v-for="(item ,index) in routers" :key="item.router" 
        :class="item.router=='/'+this.$route.path.split('/')[1]?'main-routers-yes':'main-routers-no'" 
        @click="to(item.router,item.id)">
            <!-- <img :src="item.src" class="router-icon"/> -->
            <p class="main-routers-text" v-show="1">{{item.name}}</p>
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
            ]
            }
        },
        mounted()
        {
            fetch(global.rooturl+"cate/all")
            .then(res=>res.json())
            .then(data=>{
            //console.log(data);
            for(let i=0;i<data.result.length;i++){
                //console.log(this.iconBox[data.result[i].id%5])
                this.routers.push({
                    name:data.result[i].name,
                    id:data.result[i].id,
                    src:this.iconBox[data.result[i].id%5]
                })
            }
            })
        },
    }
    </script>
    
    <style scoped>
    .navigation-bar{
        position:fixed;
        top:0;
        left:0;
        width:5%;
        height:100%;
        padding: auto;
        background: #F5F5F5;
    }
    .heading-twt-text{
        height:10%;
        display:flex;
        flex-direction:row;
        align-items:center;
    }
    [class^="title-icon-"]{
        margin-left:6.5%;
    }
    .title-icon-1{height:auto;cursor:pointer;margin:10px auto;}
    .title-icon-2{height:40%;margin:10px auto;}
    .title-icon-3{height:30%;}
    .main-routers-yes{
        display:flex;
        height:7%;
        width:100%;
        align-items:center;
        cursor:pointer;
        background:#F0F0F0;
        transition: all .15s;
    }
    .main-routers-no{
        display:flex;
        height:7%;
        width:100%;
        align-items:center;
        opacity: .7;
        cursor:pointer;
        transition:all .15s
    }
    .router-icon{
        margin:1px auto;
    }
    .main-routers-text{
        width: 40%;
        margin:10px auto;
        font-size:0.5vw;
        text-align: center;
        min-width: 25px;
        max-width: 30px;
        /* background-color: yellow; */
    }
    </style>