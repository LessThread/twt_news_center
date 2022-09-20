<template>
    <div class="rotation">
       <div class="carouselBox"
         @mouseenter.stop="handleMouseEnter"
         @mouseleave.stop="handleMouseLeave"
    >
        <!--图片数组-->
        <div v-for="(item,index) in list" :key="index">
            
            <transition name="slide-right">
                <div>
                    <div @click="goto(item.url)" v-show="index === activeIndex" class="carouselContent" style="
                        position: absolute;
                        left: 110%;
                        transform: translateX(-50%);
                        width: 100%;
                        z-index: 0;">
                        <img :src="item.imgPath" class="R-imgs"
                        style="
                            filter: blur(60px);
                            transform: rotateY(180deg);
                            opacity: 1;
                            -webkit-mask-image: linear-gradient(90deg,black,transparent,rgba(1,1,1,0.5), );
                            "
                        >
                    </div>

                    <!-- <div @click="goto(item.url)" v-show="index === activeIndex" class="carouselContent" style="
                        position: absolute;
                        left: 65%;
                        height: 100%;
                        width: 10%;
                        z-index: 0;
                        overflow: hidden;
                        ">
                        <img :src="item.imgPath"
                        style="opacity: 1;
                        filter: blur(30px);
                        transform: rotateY(180deg);
                        opacity: 1;
                        width: 500%;
                        height: 100%;
                        ">
                    </div> -->

                    <div @click="goto(item.url)" v-show="index === activeIndex" class="carouselContent">
                    <img :src="item.imgPath" class="R-img">
                    </div>
                </div>
            </transition>

            <div v-show="index === activeIndex" class="textContent" @click="goto(item.url)" :id="'r'+index" 
            style=""
            >
                
                <div class="header" :id="'r'+index+'h'" style="font-size: 40px,font-weight:bold;color:white">
                    {{item.header}}
                </div>
                <div class="Summary" style="font-size: 16px;color:white;">
                    {{item.summary}}
                </div>
                <div class="time" style="font-family: 'Product-Sans';font-size: 20px;color:white">
                    {{item.time.slice(0,11)}}
                </div>
            </div>

        </div>
        <!--指示器-->
        <div class="carousel__indicatorsBox"
            v-if="!hideIndicator"
        >
            <div v-for="(item, index) in list" :key="index"
                :class="['carousel__indicator',{ 'activeIndicator': index === activeIndex }]"
                @mouseenter="indicatorHover(index)"
                @click.stop="indicatorClick(index)">
            </div>
        </div>
    </div>
</div>
    
</template>
<style scoped>
/* 调整图片大小 */
.R-img{
    width: 80%; 
    /* min-width: 1000px; */
    height: 100%;
    /* filter: blur(1px); */
    -webkit-mask-image: linear-gradient(90deg,black 80%, rgb(11, 11, 11), transparent)
    
}

.rotation{
    width: 100%;
    min-width: 600px;
    max-height: 520px;
    height: 70vh;
    /* background-color: yellow; */
}
.textContent{
    position: absolute;
    left: 60%;
    width: 40%;
    height: 100%;
    /* background-color:#fd9b51; */
}
.textContent>div{
    /* color: white; */
}
.textContent .header{
    font-size: 40px;
    margin-top: 10%;
    margin-left: 5%;
    width: 50%;
    /* background-color:#fd9b51 ; */
}

.textContent .header:hover{
    text-decoration: underline;
}

.textContent .Summary{
    margin-top: 5%;
    margin-left: 5%;
    width: 50%;
}

.textContent .time{
    position: absolute;
    bottom: 4%;
    left: 5%;
    font-size: 20px;
    /* margin-top: 5%;
    margin-left: 10%; */
}

</style>
<script>
    import global from '@/global.vue';
    export default {
        props: {
            // 是否隐藏指示器
            hideIndicator: Boolean,
            // 轮播图切换时间间隔，单位毫秒ms
            interval: {
                type: Number,
                default: 2000
            },
            // 是否循环播放
            loop: {
                type: Boolean,
                default: true
            },
            // 是否自动播放
            autoplay: {
                type: Boolean,
                default: true
            },
            // 图片数据——对象数组 imgPath属性为图片路径，url属性为点击跳转的链接
            list: Array,
        },
        data() {
            return {
                activeIndex: 0,
                style: {
                    'height': this.height,
                    'width': this.width
                },
                timer: null,
                r0:[],
                plist:this.list,
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.startTimer();
            });

            let that=this;

            //console.log("list")
            //console.log(this.props)
            
            //this.CalculatesMainColor(1,0)
            // CalculatesMainColor(this.list[1].imgPath,1)
            // CalculatesMainColor(this.list[2].imgPath,2)
            // CalculatesMainColor(this.list[3].imgPath,3)

            
        },
        methods: {
            CalculatesMainColor(u,id){ 
                //计算主色调函数
                let img=new Image();
                let canvas = document.createElement("CANVAS");
                let ctx = canvas.getContext('2d');

                img.src = require("../assets/77.jpg")
                //img.src = u
                let that=this;
                //异步操作
                img.onload = function() 
                {
                    canvas.width=img.width;
                    canvas.height=img.height;
                    ctx.drawImage(img, 0, 0)
                    let ImgData=(ctx.getImageData(50,50, img.width-50,img.height-50)).data;

                    //取所像素的平均值
                    let r=0,g=0,b=0,a=0,num=0;
                    {
                    // for(let n=0;n<ImgData.length;n+=4)
                    // {
                    //     r+=ImgData[n];
                    //     b+=ImgData[n+1];
                    //     g+=ImgData[n+2];
                    //     a+=ImgData[n+3];
                    //     num++;
                    // }
                    // r/=num;
                    // b/=num;
                    // g/=num;
                    // a/=num;
                    }
                    //........................


                    {
                        // let rr=[],gr=[],br=[],ar=[];
                        // for(let n=0;n<ImgData.length;n+=400)
                        // {
                        //     rr.push(ImgData[n]);
                        //     gr.push(ImgData[n+1]);
                        //     br.push(ImgData[n+2]);
                        //     ar.push(ImgData[n+3])
                        //     num++;
                        // }
                    

                    // rr.sort();
                    // gr.sort();
                    // br.sort();
                    // ar.sort();

                    // console.log(rr)

                    // let nx=0
                    // for(let n=parseInt(num/3);n<2*num/3;n++)
                    // {
                    //     r+=rr[n];
                    //     b+=br[n];
                    //     g+=gr[n];
                    //     a+=ar[n];
                    //     nx++;
                    // }

                    // console.log(r)
                    // console.log(g)
                    // console.log(b)

                    // r/=nx;
                    // g/=nx;
                    // b/=nx;
                    // a/=nx;
                    }


                    //................
                    



                    let re="rgba(" + r + "," + g + "," + b + ","+ a +")";
                    //console.log(re);
                    that.r0[id]=re;
                }

               
            },

            // 鼠标移入轮播图——暂停轮播
            handleMouseEnter() {
                this.pauseTimer();
            },
            // 鼠标移出轮播图——重启轮播
            handleMouseLeave() {
                this.startTimer();
            },
            // 启动轮播
            startTimer() {
                if (this.interval <= 0 || !this.autoplay || this.timer) return;
                this.timer = setInterval(this.playSlides, this.interval);
            },
            // 暂停轮播
            pauseTimer() {
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            },
            // 切换展示的图片
            playSlides() {
                if (this.activeIndex < this.list.length - 1) {
                    this.activeIndex++;
                } else if (this.loop) {
                    this.activeIndex = 0;
                }
            },
            // 鼠标悬浮于指示器上时，切换到相应的图片
            indicatorHover(index) {
                this.activeIndex = index;
            },
            // 点击指示器时，切换到相应的图片
            indicatorClick(index) {
                this.activeIndex = index;
            },
            // 点击图片时，跳转到指定链接
            goto(url) {
               this.$router.push("ArticleDisplay?="+url)
            }
        },
        watch:{
            plist:{
                handler(newVal,oldVal)
                {
                    //if(newVal)this.CalculatesMainColor(1,0);
                    //console.log("watch")
                    //console.log(newVal[0].imgPath);
                    // for(let n=0;n<4;n++)
                    //     this.CalculatesMainColor(newVal[n].imgPath,n)
                },
                //immediate:true,//immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的                    
                deep:true,
            },
        }
    }
</script>
<style scoped>
    /*轮播图盒子样式 自动水平居中*/
    .carouselBox {
        position: relative;
        overflow: hidden;
        margin: 1% auto;
        width: 90%;
        min-width: 900px;
        border-radius: 25px;
        background-color: rgb(250, 250, 250);
        height: 100%;
        
    }
 
    /*子绝父相定位——使指示器定位在轮播图下边缘*/
    .carousel__indicatorsBox {
        position: absolute;
        display: flex;
        bottom: 10px;
        left: 92%;
        transform: translateX(-50%);
    }
 
    /*指示器样式*/
    .carousel__indicator {
        margin: 0px 6px;
        opacity: .48;
        width: 30px;
        height: 7px;
        border-radius: 5px;
        background-color: rgb(95, 96, 96);
        border: none;
        outline: 0;
        cursor: pointer;
        -webkit-transition: .3s;
        transition: .3s;
        margin-bottom: 7%;
    }
 
    /*鼠标悬浮于指示器上时，透明度变为1*/
    .activeIndicator {
        opacity: 1;
    }
 
    /*子绝父相定位——使图片层叠在轮播图中心*/
    .carouselContent {
        position: absolute;
        left: 35%;
        transform: translateX(-50%);
        width: 100%;
         /* background: rgba( 255, 255, 255, 0 ); */
        
    }
 
    /*轮播图切换时的过渡动画 -- 从左滑动进入，从右滑动移出*/
    .slide-right-enter-active,
    .slide-right-leave-active {
        will-change: transform;
        transition: all 500ms;
    }
 
    .slide-right-enter {
        opacity: 0;
        transform: translateX(-100%);
    }
 
    .slide-right-leave-active {
        opacity: 0;
        transform: translateX(100%);
    }
</style>