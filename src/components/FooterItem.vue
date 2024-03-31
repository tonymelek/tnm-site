<template>
     <div>
      <h3 class="font-bold text-amber-200 text-center">
        <a :href="link">{{ title }}</a>
      </h3>
      <ul class="list-unstyled text-center">
        <li v-for="item in list">{{ item.name }}</li>  
      </ul>
    </div>
</template>

<script>
    export default {
        name:'footer-item',
        props:{
            title:{
                type:String,
                required:true,
                default: ''

            },
            link:{
                type:String,
                required:true,
                default: ''

            },
            list:{
                type:Array,
                required:false,
                default: []

            }
        }
    }
</script>

<style scoped>

</style>