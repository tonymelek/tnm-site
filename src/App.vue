<template>
<!-- <Navbar/> -->
  <div class="flex flex-col justify-between min-height-100 bg-gray-100">
    <header class="bg-indigo-900 text-amber-100 py-2 flex px-2">
        <div class="flex items-center cursor-pointer" @click="$router.push('/')">
            <img src="/tnm_logo_only_t.png" width="50" class="me-2" >
            <h1 class="text-2xl m-0 p-0 font-extrabold">TNM</h1>
      </div>
    </header>
  <router-view />
    <Footer_/>
</div>
</template>
<script>
import Footer_ from './components/Footer_.vue';
export default {
  components:{
    Footer_
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
</style>./components/Footer_.vue
