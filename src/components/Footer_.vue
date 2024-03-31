<template>
  <footer class="bg-indigo-900 text-amber-400  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center py-2">
    <FooterItem v-for="footerItem in footerItems" :title="footerItem?.title" :link="footerItem?.link" :list="footerItem?.list||[]"/>
  </footer>
</template>

<script>
import {footerItems} from "../constants"
import FooterItem from './FooterItem.vue'
    export default {
        name:'footer_',
        data:()=>({
            footerItems
        }),
        components:{
            FooterItem
        }
    }
</script>

<style scoped>

</style>