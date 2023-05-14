<template>
  <div style="height: 100%">
    <TopNav />
    <FengMian v-if="!open" />
    <XinNeiRon v-else-if="open === '信封'" />
    <TwoPage v-else-if="open === '第二页'" />
  </div>
</template>

<script>
import FengMian from "@/components/XinFeng.vue";
import TopNav from "@/components/TopNav.vue";
export default {
  created() {
    this.$eventBus.$on("page", (value) => {
      this.open = value;
      console.log("页面", this.open);
    });
  },
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
    // changeOpen(value) {
    //   this.open = value;
    //   console.log("页面", this.open);
    // },
  },
  mounted() {},
};
</script>

<style scoped>
#nanxiaVideo {
  display: none;
}
</style>