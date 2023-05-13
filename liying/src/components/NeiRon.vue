<template>
  <div class="wrapper">
    <iframe width="100%" height="100%" src="./xk.html" frameborder="0"></iframe>
    <Xinkon />
    <div class="container">
      <div class="litter-head">小理你好哇</div>
      <div class="litter-body">
        <div class="word" v-for="(item, index) in words" :key="index">
          {{ item }}。
        </div>
        <div class="finish">余建海</div>
      </div>
      <div class="date">
        小理宝宝的
        <div>{{ date.day }} 天</div>
        <div>{{ date.hour }} 时</div>
        <div>{{ date.minute }} 分</div>
        <div>{{ date.second }} 秒</div>
      </div>
    </div>

    <div class="pikachu">
      <div class="head">
        <div class="ears left brown">
          <div class="ears-inside yellow"></div>
        </div>
        <div class="ears right brown">
          <div class="ears-inside yellow"></div>
        </div>
        <div class="face yellow">
          <span class="eye left brown"></span>
          <span class="eye right brown"></span>
          <span class="mouth"></span>
          <span class="cachete left"></span>
          <span class="cachete right"></span>
        </div>
      </div>
      <div class="body yellow">
        <div class="heart"></div>
        <div class="paw left yellow"></div>
        <div class="paw right yellow"></div>
      </div>
      <div class="leg left yellow-dark"></div>
      <div class="leg right yellow-dark"></div>
      <div class="tail"></div>
    </div>
  </div>
</template>

<script>
import Xinkon from "./Xinkong.vue";
export default {
  components: {
    Xinkon,
  },

  data() {
    return {
      words: [
        "希望你每天都开心，因为你真的很好很好很好，",
        "我会一直陪着你。",
        "在这平静的日子里，除了想你，少有波澜",
        "宝宝我爱你",
      ],
      date: {
        day: 521,
      },
      timer: null,
    };
  },
  methods: {
    getTime() {
      var time1 = new Date("2022-11-27 5:21:13");
      var time2 = new Date();
      time1 = time1.getTime();
      time2 = time2.getTime();
      var differenceTime = time2 - time1;

      let day = Math.floor(differenceTime / (60 * 60 * 24 * 1000));
      let hour = Math.floor(
        (differenceTime - day * 24 * 60 * 60 * 1000) / (60 * 60 * 1000)
      );
      let minute = Math.floor(
        (differenceTime - day * 24 * 60 * 60 * 1000 - hour * (60 * 60 * 1000)) /
          (60 * 1000)
      );
      let second = Math.floor((differenceTime / 1000) % 60, 10);
      this.date.day = day;
      this.date = {
        day,
        hour,
        minute,
        second,
      };
    },
  },
  mounted() {
    this.words = window.CONFIG.words.split("。");
    this.getTime();
    this.timer = setInterval(() => {
      this.getTime();
    });
  },
  beforeDestory() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Loved+by+the+King);

body {
  overflow-x: hidden;
}

div,
ul,
span {
  display: block;
  position: absolute;
  margin: auto;
  padding: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.brown {
  background-color: #452211;
}
.yellow {
  background-color: #ffd814;
}
.yellow-dark {
  background-color: #e0a100;
}

iframe {
  position: absolute;
}

@keyframes identifier {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.wrapper {
  /* position: fixed; */
  /* margin: 20px auto; */
  /* height:80%; */
  width: 100%;
  font-family: "Loved by the King", cursive;
  background: white;
  animation: identifier 1s ease-in;
}

.wrapper .container {
  padding: 1em 1em;
  position: relative;
  box-sizing: border-box;
}
.wrapper .container .date {
  padding: 0 15%;
  left: 10%;
  position: relative;
  top: 2em;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  color: pink;
}
.wrapper .container .date > div {
  position: relative;
  height: 60px;
  box-sizing: border-box;
}

.wrapper .litter-head {
  position: relative;
  text-indent: 1em;
  font-size: 1.6em;
  text-transform: uppercase;
  display: block;
}

.wrapper .litter-body {
  box-sizing: border-box;
  position: relative;
  text-indent: 1em;
  font-size: 1.5em;
  text-transform: uppercase;
  display: block;
  padding: 0em 1em;
}
@keyframes word-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.wrapper .litter-body .word {
  position: relative;
  font-size: 1em;
  text-transform: uppercase;
  display: block;
  color: white;
}
.wrapper .litter-body .finish {
  position: relative;
  left: 70%;
  font-size: 1em;
  text-transform: uppercase;
  display: block;
  color: white;
}

h2 {
  text-transform: uppercase;
  /* text-align: center; */
  font-size: 2em;
  color: #452211;
}

.pikachu {
  position: relative;
  height: 10%;
  margin-top: -1em;
  margin-left: 10%;
  width: 0.72917rem;
  transform: scale(1.5);
}

.pikachu::before {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.15);
  height: 10px;
  width: 90%;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 95px;
  border-radius: 50%;
}

.pikachu .head {
  bottom: auto;
  height: 120px;
  width: 120px;
  z-index: 3;
}

.pikachu .head .face {
  width: 120px;
  height: 70px;
  top: auto;
  border-radius: 40px 40px 30px 30px;
  z-index: 2;
}

.face .eye {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  bottom: auto;
  top: 28px;
  -webkit-animation: blink 4s infinite;
}

.eye.left {
  right: auto;
  left: 32px;
}

.eye.right {
  left: auto;
  right: 32px;
}

.face .mouth {
  position: relative;
  background: transparent;
  height: 1vmin;
  width: 1vmin;
  border-radius: 50%;
  border-bottom: 0.3vmin solid #4a4947;
  left: -0.3vmin;
  top: 1.8vmin;
}
.face .mouth::before {
  position: absolute;
  content: "";
  background: transparent;
  height: 1vmin;
  width: 1vmin;
  border-radius: 50%;
  border-bottom: 0.3vmin solid #4a4947;
  left: 0.7vmin;
}

.face .cachete {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  bottom: auto;
  top: 38px;
  background-color: #e64900;
  z-index: 9;
}

.cachete.left {
  right: auto;
  left: 10px;
}

.cachete.right {
  left: auto;
  right: 10px;
}

.pikachu .head .ears {
  width: 20px;
  height: 90px;
  bottom: auto;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
}

.ears.left {
  right: auto;
  left: 10px;
}

.ears.right {
  left: auto;
  right: 10px;
}

.ears .ears-inside {
  top: auto;
  height: 70px;
  width: 30px;
  border-radius: 50%;
}

.ears.right .ears-inside {
  position: absolute;
  left: -50%;
}

.pikachu .body {
  bottom: auto;
  top: 80px;
  height: 105px;
  width: 130px;
  border-radius: 80px 80px 40px 40px;
  overflow: hidden;
  z-index: 2;
}

.pikachu .body .paw {
  bottom: auto;
  top: 50px;
  height: 15px;
  width: 30px;
  z-index: 9;
  border-bottom: 1px solid #e0a100;
  border-top: 1px solid #ffffff;
}

.pikachu .body .paw.left {
  right: auto;
  left: 15px;
  border-radius: 0 50% 50% 0;
}

.pikachu .body .paw.right {
  left: auto;
  right: 15px;
  border-radius: 50% 0 0 50%;
}

.pikachu .body .heart {
  width: 40px;
  height: 40px;
  bottom: auto;
  top: 10px;
  z-index: 8;
  animation: beat 0.45s infinite;
  -webkit-animation: beat 0.45s infinite;
}

/* .pikachu .body .heart:before, */
.pikachu .body .heart:before {
  position: absolute;
  content: "🐟";
  left: -20px;
  z-index: 1000;
  width: 50px;
  height: 30px;
  /* left: 20px;
    top: 30px;
    width: 50%;
    height: 100%;
    background: #e64900;
    -moz-border-radius: 20px 20px 0 0;
    border-radius: 10px 10px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%; */
}
.pikachu .body .heart:after {
  left: 0px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
  -moz-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  -o-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.pikachu .leg {
  z-index: 1;
  bottom: auto;
  top: 172px;
  height: 20px;
  width: 30px;
}

.pikachu .leg.left {
  right: auto;
  left: 20px;
  border-radius: 80px 10px 80px 10px;
}

.pikachu .leg.right {
  left: auto;
  right: 20px;
  border-radius: 10px 80px 10px 80px;
}

.pikachu .tail {
  position: relative;
  width: 0;
  height: 0;
  top: 16px;
  transform: rotate(334deg);
}

.pikachu .tail::after {
  /* z-index: 1;
    height: 40px;
    width: 50px;
    left:auto;
    bottom: auto;
    top: 70px;
    border-radius: 10% 30%; */
  position: absolute;
  width: 0;
  height: 0;
  border-left: 1vmin solid transparent;
  border-right: 1vmin solid transparent;
  border-bottom: 6vmin solid #ffd814;
  border-radius: 80%;
  top: 0vmin;
  left: 0vmin;
  transform: rotate(40deg);
}
.pikachu .tail::before {
  content: "";
  position: absolute;
  background: #ffd814;
  width: 5vmin;
  height: 2vmin;
  border-radius: 40%;
  top: 4vmin;
  left: 0vmin;
  box-shadow: -1.2vmin 1.8vmin #ffd814;
}

.signature {
  position: absolute;
  margin: auto;
  bottom: 0;
  top: auto;
}

.signature p {
  text-align: center;
  font-family: Helvetica, Arial, Sans-Serif;
  font-size: 0.85em;
}

.signature .much-heart {
  display: inline-block;
  position: relative;
  margin: 0 4px;
  height: 10px;
  width: 10px;
  background: #ac1d3f;
  border-radius: 4px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.signature .much-heart::before,
.signature .much-heart::after {
  display: block;
  content: "";
  position: absolute;
  margin: auto;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: #ac1d3f;
  top: -4px;
}

.signature .much-heart::after {
  bottom: 0;
  top: auto;
  left: -4px;
}

.signature a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

@keyframes blink {
  0% {
    height: 14px;
    top: 28px;
  }
  5% {
    height: 2px;
    top: 34px;
  }
  10% {
    height: 14px;
    top: 28px;
  }
  40% {
    height: 14px;
    top: 28px;
  }
  50% {
    height: 2px;
    top: 34px;
  }
  55% {
    height: 14px;
    top: 28px;
  }
  100% {
    height: 14px;
    top: 28px;
  }
}
</style>