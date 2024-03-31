<template>
  <div class="bg-gray-100">
    <!-- Hero Section -->
    <section class="bg-indigo-600 text-white lg:py-10 py-2">
      <div class="container mx-auto text-center">
        <div class="flex lg:flex-row flex-col items-center justify-around">
          <div class="left">
            <img src="/tnm_logo_only_t.png" width="200" class="py-2">
          </div>
          <div class="rig">
               <h1 class="text-4xl font-bold mb-4">Welcome to TNM Investments Group Pty Ltd</h1>
                <p class="text-lg">Your one-stop solution for IT consultations, web development, domain hosting, and email services.</p>
                <p class="text-lg mt-4">We offer competitive prices and comprehensive solutions tailored to your needs.</p>
          </div>
        </div>
     
      </div>
    </section>

    <!-- Services Section -->

    <section class="py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-8">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TNM_Service v-for="service in services" :title="service.title" :desc="service.desc" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import TNM_Service from "../components/common/TNM_Service.vue";
import {services} from "../constants"
export default {
  components: { TNM_Service },
  name: 'home-page',
  data:()=>({
    services
  })

};
</script>
<style scoped>
img {
  filter: invert(.85);
}
</style>
