<template>
    <div id="loadingContainer" class="loader-container" :class="showLoader">
        <div class="loader-wrapper">
            <div class="loader"></div>
            <span class="w-full text-center inline-block mt-2">Loading ...</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loading-modal',
    data: () => ({

    }),
    props: {
        showLoading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        showLoader(){
            window.scroll({
                top:0,
                left:0,
                behavior:'smooth'
            })
            return this.showLoading?'flex':'hidden'
        }
    },
  
}
</script>
<style scoped>
    html,body{
            height: 100%;
        }

        h1{
            text-align: center;
            margin: 0;
        }
        .loader-container{
            position:absolute;
            top: 0;
            left: 0;
            z-index:2;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(3px); 
        }
        @keyframes rotate-loader {
           0%{
            transform: rotate(0deg);
           } 
           100%{
            transform: rotate(360deg);
           }
        }
        .loader{
            height: 100px;
            width:100px;
            border-radius: 50%;
            border: 10px solid black;
            border-top: 10px solid red;
            animation: rotate-loader 1s infinite linear;
        }

</style>