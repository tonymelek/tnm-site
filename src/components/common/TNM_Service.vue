<template>
        <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-xl font-bold mb-2">{{title}}</h3>
            <p>{{ desc }}</p>
          </div>
</template>

<script>
    export default {
        name:'tnm-service',
        props:{
            title:{
                type:String,
                required:true                
            },
            desc:{
                type:String,
                required:true                
            },
            link:{
                type:String,
                required:false                
            },
        }
    }
</script>

<style scoped>

</style>