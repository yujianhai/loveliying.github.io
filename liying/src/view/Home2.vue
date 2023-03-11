<template>
  <div style="height:100%">
    <video 
    src="../assets/nanxia.mp4" 
    autoplay="autoplay"
    width="0px"
    height="00px"
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