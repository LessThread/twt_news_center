<template>
  <div class="main-user-content">
    <div v-if="Refresh">
      <homeComponets
      :filter="filter"
      :key="Refresh"
    />
    </div>
  </div>
</template>

<script>
import Display from '@/components/Display.vue'
import homeComponets from '@/components/homeComponets.vue'


export default {
    name:"RecentNews",
    data() {
      return {
        filter:0,
        Refresh:1,
      }
    },
    components:{
      Display,
      homeComponets
    },
    computed:{
    },
    created(){
      let url = window.location.href;
      url=url.slice(url.indexOf("=")+1);
      this.filter=url;
    },
    beforeUpdate(){
      let url = window.location.href;
      url=url.slice(url.indexOf("=")+1);
      this.filter=url;
    },
    watch:{
    $route(to,from){
      //强制刷新组件
      this.Refresh=0;
      this.Refresh=1;
    }
},
}
</script>

<style>

</style>