<template>
  <div class="qita">
    <div
      class="left-button"
      :class="{ active: activeIndex == 0 }"
      @click="openIt('', 0)"
    >
      回到封面
    </div>
    <div
      class="left-button"
      :class="{ active: activeIndex == 1 }"
      @click="openIt('第二页', 1)"
    >
      春夏秋冬
    </div>
    <div
      class="left-button"
      :class="{ active: activeIndex == 2 }"
      @click="openIt('信封', 2)"
    >
      写给小理
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    openIt(value, index) {
      this.activeIndex = index;
      const music = Array.from(document.getElementsByClassName("music"));
      music.forEach((m) => {
        m.pause();
      });
      console.log("music", music);
      let v2 = null;
      if (value == "信封") {
        this.$eventBus.$emit("open-xing");
      } else if (value == "第二页") {
        v2 = document.getElementById("cxqd");
        v2.play();
        v2.volume = 1;
        this.$eventBus.$emit("page", value);
      } else if (value === "") {
        v2 = document.getElementById("windy");
        this.$eventBus.$emit("page", value);
        v2.volume = 0.3;
      }
      v2.play();
    },
  },

  async awaiwMethods() {
    return Promise((resolove) => {
      setTimeout(() => {
        resolove();
      }, 3000);
    });
  },
};
</script>

<style scoped>
.qita {
  position: relative;
  z-index: 1000000;
  width: 100%;
  height: 200px;
  color: #ffbbc1;
  background: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left-button {
  width: 300px;
  height: 100px;
  color: black;
  background: white;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  border-width: 0;
  margin: 20px;
  pointer-events: all;
  border-radius: 10px;
}

.active {
  box-shadow: 0 0 8px 8px pink;
}
</style>