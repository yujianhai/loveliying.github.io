<template>
  <div class="qita">
    <div class="left-button" @click="openIt('')">回到封面</div>
    <div class="left-button" @click="openIt('第二页')">其他内容</div>
    <div class="left-button" @click="openIt('信封')">写给小理</div>
  </div>
</template>

<script>
export default {
  methods: {
    openIt(value) {
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
        v2.volume = 0.3;
        this.$eventBus.$emit("page", value);
      } else if (value === "") {
        v2 = document.getElementById("windy");
        this.$eventBus.$emit("page", value);
        v2.volume = 0.3;
      }
      v2.volume = 0.5;
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
  background: aqua;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  border-width: 0;
  margin: 20px;
  pointer-events: all;
}
</style>