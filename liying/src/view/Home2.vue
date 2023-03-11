<template>
  <div>
    <video 
    src="@/assets/nanxia.mp4" 
    autoplay="autoplay"
    width="300px"
    height="300px"
    id="nanxiaVideo"
    controls></video>
    <FengMian v-if="!open" @handleOpen="changeOpen" />
    <XinNeiRon v-else />
  </div>
</template>

<script>
import FengMian from '@/components/XinFeng.vue'
import XinNeiRon from '@/components/NeiRon.vue'
export default {
    data(){
        return {
            open:false,
            autoplay:true
        }
    },
    components:{
        FengMian,
        XinNeiRon
    }  ,
    methods:{
        changeOpen(value){
            this.open = value
            console.log('this.open',this.open);
            var v2 = document.getElementById("nanxiaVideo");
            v2.play()
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
#nanxiaVideo{
    display: none;
}

</style>