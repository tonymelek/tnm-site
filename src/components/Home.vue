<template>
  <div class="bg-gray-100">
    <!-- Hero Section -->
    <section class="bg-indigo-600 text-white py-20">
      <div class="container mx-auto text-center">
        <div class="flex items-center justify-around">
          <div class="left">
            <img src="/tnm_logo_only_t.png" width="200" >
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
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-xl font-bold mb-2">IT Consultations</h3>
            <p>Expert consultations to help you make informed decisions about your IT infrastructure.</p>
          </div>
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-xl font-bold mb-2">Web Development</h3>
            <p>Customized web development solutions tailored to your business requirements.</p>
          </div>
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-xl font-bold mb-2">Domain & Hosting</h3>
            <p>Register your domain, host your website, and get email services all in one place.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home-page',
};
</script>
<style scoped>
img {
  filter: invert(.85);
}
</style>
