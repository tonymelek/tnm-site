<template>
<!-- <Navbar/> -->
  <div class="flex flex-col justify-between min-height-100 bg-gray-100">
    <header class="bg-indigo-900 text-amber-200 py-2 flex px-2">
        <div class="flex items-center cursor-pointer" @click="$router.push('/')">
            <img src="/tnm_logo_only_t.png" width="50" class="me-2" >
            <h1 class="text-2xl m-0 p-0">TNM</h1>
      </div>
    </header>
   
  <router-view />
  <footer class="bg-indigo-900 text-amber-400 flex items-center justify-around py-3">
    <div>
      <h3 class="font-bold text-amber-200">
        <a href="/">Home</a>
      </h3>

    </div>
    <div>
      <h3 class="font-bold text-amber-200">About</h3>
      <ul class="list-unstyled">
        <li><a href="/about-us">About us</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold text-amber-200">Privacy and terms</h3>
      <ul class="list-unstyled">
        <li>Privacy</li>
        <li>Your information</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold text-amber-200">
        <a href="/help">Help</a>
      </h3>
      <ul class="list-unstyled">
        <li>Contact us</li>
        <li>Feedback</li>
      </ul>
    </div>
  </footer>
</div>
</template>
<script setup>

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
