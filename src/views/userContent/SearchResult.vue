<template>
    <div class="main-user-content">
        <div class="result_contant">
            <div class="result_box" v-for="item in res" @click="gotoart(item.id)">
                <div class="res_text">
                    <br>
                    <div class="title">
                        {{item.title}}
                    </div>
                    <br/>
                    <div class="Summary">
                        {{NoTitle}}->item.text.slice(40)
                    </div>
                    <br/>
                    <div class="script">
                        <div>{{item.releaseTime?item.releaseTime:NoTitle}}</div>
                        <div>{{item.categoryId?item.categoryId:NoTitle}}</div>
                        <div>{{item.contributorName?item.contributorName:NoTitle}}</div>
                        <div>{{item.viewsNumber?item.viewsNumber:NoTitle}}</div>
                        <div>5</div>
                        <div>6</div>
                    </div>
                </div>
                <div class="res_blank">
                </div>
                <div class="res_img">
                    <img src="https://www.gardatravelclub.com/wp-content/uploads/2022/08/balance-110850__480.jpg" />
                </div>
            </div>
        </div>
        <br>

        <div class="ptr_box"> 
            <PagePtr  :currentNum="currentNum" :maxNum="maxNum"/>
        </div>

        <br>
        <copyright/>
    </div>
</template>

<script>
import copyright from "@/components/copyright.vue";
import PagePtr from "@/components/PagePtr.vue";
import global from "@/global.vue";

export default{
    name: "search",
    data() {
        return {
            res: [],
            currentNum:1,
            maxNum:4,
            NoTitle:"空",
        };
    },
    methods: {
        gotoart(id) {
            this.$router.push("/ArticleDisplay?id="+id);
        }
    },
    components: {
        copyright,
        PagePtr
},
    mounted() {
        let url=window.location.href;
        url=url.slice(url.indexOf("=")+1);
        fetch(global.rooturl+"art/select/title/"+url)
        .then(res=>res.json())
        .then(data=>{
            this.res=data.result
        })
    },
}
</script>

<style scoped>
.ptr_box{
    position: relative;
}

.result_contant{
    margin-left: 5%;
    height: auto;

}
.result_box{
    width: 95%;
    background-color: #fafafa;
    min-height: 200px;
    margin-top: 1%;
    border-radius: 30px;
    display: flex;
}
.res_text{
    width: 70%;
}

.result_box .title{
    /* position: relative; */
    font-size: 30px;
    margin-left: 2%;
    height: auto;
}
.result_box .Summary{
    font-size: 20px;
    margin-left: 2%;
    height: auto;
    color: #929292;
}
.result_box .script{
    font-size: 20px;
    margin-left: 2%;
    color: #929292;
    display: flex;
    justify-content: space-between;
}

.result_box .res_blank{
    width:20%;
    
}

.result_box .res_img{
    width: 20%;
    overflow: hidden;
}

.res_img>img{
    width: 100%;
    height: 200px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

}
</style>