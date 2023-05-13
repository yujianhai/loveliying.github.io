<template>
  <div style="height: 100%">
    <TopNav @handleOpen="changeOpen" />
    <FengMian v-if="!open" @handleOpen="changeOpen" />
    <XinNeiRon v-else-if="open === '信封'" />
    <TwoPage v-else-if="open === '第二页'" />
  </div>
</template>

<script>
import FengMian from "@/components/XinFeng.vue";
import TopNav from "@/components/TopNav.vue";
export default {
  data() {
    return {
      open: "",
      autoplay: true,
    };
  },
  components: {
    FengMian,
    TopNav,
    XinNeiRon: () => import("@/components/NeiRon.vue"),
    TwoPage: () => import("@/components/TwoPage.vue"),
  },
  methods: {
    changeOpen(value) {
      this.open = value;
      console.log("va--", this.open);
      var v2 = document.getElementById("nanxiaVideo");
      v2.play();
    },
  },
  mounted() {},
};
</script>

<style scoped>
#nanxiaVideo {
  display: none;
}
</style>