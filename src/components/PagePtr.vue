<template>
    <div class="PagePtr">
        <div class="pageNumBox">
            
            <div class="num" v-show="(currentNum!=1)&&(currentNum!=2)">
                1
            </div>
            <div class="num" v-show="(currentNum!=1)&&(currentNum!=2)">
                ...
            </div>
                <div class="num" v-show="currentNum!=1">
                    {{currentNum-1}}
                </div>
                    <div class="num cur">
                        {{currentNum}}
                    </div>
                <div class="num" v-show="currentNum!=maxNum">
                    {{currentNum+1}}
                </div>
            <div class="num" v-show="(currentNum!=maxNum)&&currentNum!=maxNum-1">
                ...
            </div>
            <div class="num" v-show="(currentNum!=maxNum)&&currentNum!=maxNum-1">
                {{maxNum}}
            </div>
        </div>
    </div>
</template>

<script>
import { init } from 'events';

export default{
    name:"pageNum",
    data() {
        return {
            leftNum:0,
            rightNum:0,
        }
    },
    props:{
        currentNum:Number,
        maxNum:Number,
    },
    mounted() {
        this.leftNum=this.currentNum;
        this.rightNum=this.currentNum;
            
    },
}
</script>

<style scoped>
.PagePtr{
    margin: 10px auto;
}

.pageNumBox{
    display: flex;
    margin: 10px auto;
    justify-content: space-between;
    width: 20%;
}

.pageNumBox .num{
    margin-left: 10px;
}
.pageNumBox .cur{
    background-color: #00a0e9;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    color: white;
}
</style>