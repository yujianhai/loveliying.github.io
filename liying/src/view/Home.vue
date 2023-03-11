<template>
  <div class="love" @click="openXin">
    <div class="head" >
    </div>
    <div class="container" >
        <div class="fengmian">
            <transition name="fade">
                <FengMian v-show="!open" />
            </transition>
            <transition name="fade">
                <Xin v-show="open" />
            </transition>
        </div>
    </div>
  </div>
</template>

<script>
import Xin from "@/components/XinNeiRon.vue";
import Head from './Head.vue'
import FengMian from '@/components/FengMian'
export default {
  data() {
    return {
      open: false,
    };
  },
  components: {
    Xin,
    Head,
    FengMian
  },
  methods: {
    openXin() {
      setTimeout(() => {
        this.open = !this.open;
      }, 0);
    },
  },
};
</script>

<style scoped>
.love{
    width: 100%;
    height: 1080px;
}

.love .container{
    width: 100%;
    height:100%;
    /* background: url('@/assets/background.webp') no-repeat; */
    background-size: 100%;
}

.fengmian{
    display: flex;
    justify-content: center;
}

.love .head{
    display: flex;
    justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  transition: all 1s;

}
 .fade-leave-to  {
  transform: scale(0);
}
.fade-enter{
  transform: scale(0);
}
</style>
