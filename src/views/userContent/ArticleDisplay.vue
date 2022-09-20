<template>
<div class="main-user-content">
    <Display
    :title=articleInformation.title
    :headImg=articleInformation.bannerImageId
    :class_=articleInformation.origin
    :writer=articleInformation.contributorName
    :time=articleInformation.releaseTime
    :content=this.textString
    :reader=this.articleInformation.viewsNumber
    />
    <Copyright/>
    </div>
</template>
<script>
import Display from "@/components/Display.vue";
import global from "@/global.vue";
import Copyright from "../../components/copyright.vue";
export default{
    components:{
    Display,
    global,
    Copyright
},
data() {
    return {
        textString:String,
    }
},
    created(){
        fetch(global.rooturl+"art/select/"+this.$route.fullPath.split("=")[this.$route.fullPath.split("=").length-1])
        .then(res=>res.json())
        .then(res=>{
            this.articleInformation = res.result;
            this.textString=res.result.text;
            // console.log("this.textString")
            // console.log(this.textString)

            
        })
    },
    data(){
        return{
            articleInformation:{}
        }
    }
}

</script>