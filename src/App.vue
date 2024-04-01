<template>
<!-- <Navbar/> -->
  <div class="flex flex-col justify-between min-height-100 bg-gray-100">
  <Header_/>
  <router-view />
  <Footer_/>
</div>
</template>
<script>
import Footer_ from './components/Footer_.vue';
import Header_ from './components/Header_.vue';
export default {
  components:{
    Footer_,
    Header_
  }
}
</script>
<style scoped>
.min-height-100{
  height: 100%;
  min-height:100vh;
}
img{
  filter:invert(.85)
}
</style>
