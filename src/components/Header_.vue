<template>
    <header class="bg-indigo-900 text-amber-100 py-2 flex px-2">
        <div class="flex items-center cursor-pointer" @click="$router.push('/')">
            <img src="/tnm_logo_only_t.png" width="50" class="me-2" >
            <h1 class="text-2xl m-0 p-0 font-extrabold">TNM</h1>
      </div>
    </header>
</template>

<script>
    export default {
        name:'header_'
    }
</script>

<style scoped>

</style>