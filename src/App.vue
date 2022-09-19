<template>
  <!--      遮罩层:mask-layer     z-index:5      -->
  <router-view/>
  
</template>

<style>
html{height:100%;width:100%;}
body{margin:0;height:100%;width:100%;}
#app{height:100%;width:100%;}
p{margin:0;}
li{list-style:0;margin:0;}
ul{margin:0;padding:0;}

div{
  font-family: 'Noto Sans SC';
}

.mask-layer{
  height:100%;
  width:100%;
  position:fixed;
  top:0;
  left:0;
  z-index:5;
  background: rgba(0, 0, 0, 0.1);
}


</style>
<script>
</script>