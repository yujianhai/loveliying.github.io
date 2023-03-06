<<<<<<< HEAD
<template>
  <div>
    <div id="main">
      <div id="error">
        本页面采用HTML5编辑，目前您的浏览器无法显示，请换成谷歌(<a
          href="http://www.google.cn/chrome/intl/zh-CN/landing_chrome.html?hl=zh-CN&brand=CHMI"
          >Chrome</a
        >)或者火狐(<a href="http://firefox.com.cn/download/">Firefox</a
        >)浏览器，或者其他游览器的最新版本。
      </div>
      <div id="wrap">
        <div id="text">
          <div id="code">
            <span class="say">真的好希望小理每天都能够快乐呀</span><br />
            <span class="say"> </span><br />

            <span class="say"> <span class="space"></span>-- 小🐟--</span>
          </div>
        </div>
        <div id="clock-box">
          <span class="STYLE1">现在是</span>小🐟
          <span class="STYLE1" style="color: red">❤</span> 小理同学<span
            class="STYLE1"
            style="color: red"
            >相恋</span
          >
          <div id="clock"></div>
        </div>
        <canvas id="canvas" width="1100" height="680"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import "./index_files/jquery.min.js";
import "./index_files/jscex.min.js";
import "./index_files/jscex-parser.js";
import "./index_files/jscex-jit.js";
import "./index_files/jscex-builderbase.min.js";
import "./index_files/jscex-async.min.js";
import "./index_files/jscex-async-powerpack.min.js";
import "./index_files/functions.js";
import "./index_files/love.js";
export default {
  mounted() {
    var canvas = $("#canvas");

    if (!canvas[0].getContext) {
      $("#error").show();
      return false;
    }

    var width = canvas.width();
    var height = canvas.height();

    canvas.attr("width", width);
    canvas.attr("height", height);

    var opts = {
      seed: {
        x: width / 2 - 20,
        color: "rgb(190, 26, 37)",
        scale: 2,
      },
      branch: [
        [
          535,
          680,
          570,
          250,
          500,
          200,
          30,
          100,
          [
            [
              540,
              500,
              455,
              417,
              340,
              400,
              13,
              100,
              [[450, 435, 434, 430, 394, 395, 2, 40]],
            ],
            [
              550,
              445,
              600,
              356,
              680,
              345,
              12,
              100,
              [[578, 400, 648, 409, 661, 426, 3, 80]],
            ],
            [539, 281, 537, 248, 534, 217, 3, 40],
            [
              546,
              397,
              413,
              247,
              328,
              244,
              9,
              80,
              [
                [427, 286, 383, 253, 371, 205, 2, 40],
                [498, 345, 435, 315, 395, 330, 4, 60],
              ],
            ],
            [
              546,
              357,
              608,
              252,
              678,
              221,
              6,
              100,
              [[590, 293, 646, 277, 648, 271, 2, 80]],
            ],
          ],
        ],
      ],
      bloom: {
        num: 700,
        width: 1080,
        height: 650,
      },
      footer: {
        width: 1200,
        height: 5,
        speed: 10,
      },
    };

    var tree = new Tree(canvas[0], width, height, opts);
    var seed = tree.seed;
    var foot = tree.footer;
    var hold = 1;

    canvas
      .click(function (e) {
        var offset = canvas.offset(),
          x,
          y;
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
        if (seed.hover(x, y)) {
          hold = 0;
          canvas.unbind("click");
          canvas.unbind("mousemove");
          canvas.removeClass("hand");
        }
      })
      .mousemove(function (e) {
        var offset = canvas.offset(),
          x,
          y;
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
        canvas.toggleClass("hand", seed.hover(x, y));
      });

    var seedAnimate = eval(
      Jscex.compile("async", function () {
        seed.draw();
        while (hold) {
          $await(Jscex.Async.sleep(10));
        }
        while (seed.canScale()) {
          seed.scale(0.95);
          $await(Jscex.Async.sleep(10));
        }
        while (seed.canMove()) {
          seed.move(0, 2);
          foot.draw();
          $await(Jscex.Async.sleep(10));
        }
      })
    );

    var growAnimate = eval(
      Jscex.compile("async", function () {
        do {
          tree.grow();
          $await(Jscex.Async.sleep(10));
        } while (tree.canGrow());
      })
    );

    var flowAnimate = eval(
      Jscex.compile("async", function () {
        do {
          tree.flower(2);
          $await(Jscex.Async.sleep(10));
        } while (tree.canFlower());
      })
    );

    var moveAnimate = eval(
      Jscex.compile("async", function () {
        tree.snapshot("p1", 240, 0, 610, 680);
        while (tree.move("p1", 500, 0)) {
          foot.draw();
          $await(Jscex.Async.sleep(10));
        }
        foot.draw();
        tree.snapshot("p2", 500, 0, 610, 680);

        canvas
          .parent()
          .css("background", "url(" + tree.toDataURL("image/png") + ")");
        canvas.css("background", "#ffe");
        $await(Jscex.Async.sleep(300));
        canvas.css("background", "none");
      })
    );

    var jumpAnimate = eval(
      Jscex.compile("async", function () {
        var ctx = tree.ctx;
        while (true) {
          tree.ctx.clearRect(0, 0, width, height);
          tree.jump();
          foot.draw();
          $await(Jscex.Async.sleep(25));
        }
      })
    );
    //下面修改起始日期
    var textAnimate = eval(
      Jscex.compile("async", function () {
        var together = new Date();
        together.setFullYear(2022, 10, 27); //时间年月日 月份0~11
        together.setHours(5); //小时
        together.setMinutes(24); //分钟
        together.setSeconds(13); //秒前一位
        together.setMilliseconds(14); //秒第二位

        $("#code").show().typewriter();
        $("#clock-box").fadeIn(500);
        while (true) {
          timeElapse(together);
          $await(Jscex.Async.sleep(1000));
        }
      })
    );

    var runAsync = eval(
      Jscex.compile("async", function () {
        $await(seedAnimate());
        $await(growAnimate());
        $await(flowAnimate());
        $await(moveAnimate());

        textAnimate().start();

        $await(jumpAnimate());
      })
    );

    runAsync().start();
  },
};
</script>

<style>
@import url("./index_files/default.css");
</style>
=======
<template>
  <div class="love">
    <div id="container" @click="openXin">
      <!-- 信封盒子 -->
      <div :class="['envelope', open ? 'animat' : '']" v-if="!open">
        <div class="name">信</div>
      </div>
      <!-- 爱心 -->
      <!-- <ul class="heart">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> -->
    </div>
    <div class="xin">
      <Xin v-if="open" />
    </div>
  </div>
</template>

<script>
import Xin from "../components/XinNeiRon.vue";
export default {
  data() {
    return {
      open: false,
    };
  },
  components: {
    Xin,
  },
  methods: {
    openXin() {
      setTimeout(() => {
        this.open = true;
      }, 0);
    },
  },
};
</script>

<style scoped>
@keyframes beatHeart {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  30% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
  }
  70% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes beatHeart1 {
  from {
    top: -20px;
    left: 0;
    transform: scale(0.25) rotate(45deg);
    opacity: 1;
  }
  to {
    top: -200px;
    left: 0;
    transform: scale(1) rotate(50deg);
    opacity: 0;
  }
}
@keyframes beatHeart2 {
  from {
    top: -10px;
    left: -10px;
    transform: scale(0.25) rotate(-20deg);
    opacity: 0.2;
  }
  to {
    top: -200px;
    left: 10px;
    transform: scale(1) rotate(45deg);
    opacity: 0;
  }
}
@keyframes beatHeart3 {
  from {
    top: -10px;
    left: 10px;
    transform: scale(0.25) rotate(20deg);
    opacity: 0.2;
  }
  to {
    top: -200px;
    left: -100px;
    transform: scale(1) rotate(60deg);
    opacity: 0;
  }
}
@keyframes beatHeart4 {
  from {
    top: -20px;
    left: -10px;
    transform: scale(0.25) rotate(45deg);
    opacity: 0.2;
  }
  to {
    top: -200px;
    left: -10px;
    transform: scale(1) rotate(80deg);
    opacity: 0;
  }
}

.love {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  transform: scale(1.5);
}

.love .xin {
  padding: 2% 10%;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  animation: tobig2 2s;
}

@keyframes tobig {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1.5);
  }
}
@keyframes tobig2 {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
.envelope {
  position: relative;
  margin-top: 100px;
  transform: scale(1.5);
  width: 400px;
  height: 200px;
  border: 10px solid #e76978;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: tobig 2s;
}

@keyframes tosamll {
  ftom {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}

.animat {
  animation: tosamll 2s;
}

.name {
  height: 50px;
  z-index: 1000;
  font-size: 40px;
  color: #ffc0cb;
}

.envelope::after,
.envelope::before {
  content: "";
  width: 280px;
  height: 280px;
  border-top: 10px solid #e76978;
  border-right: 10px solid #e76978;
  position: absolute;
}
.envelope::after {
  transform: rotate(135deg);
  top: -148px;
  left: 53px;
  background: white;
}
.envelope::before {
  transform: rotate(-45deg);
  bottom: -148px;
  left: 53px;
}

.heart,
.heart > li {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  background: #ff1414;
  z-index: 10;
}
.heart {
  transform: translate(-50%, -50%) rotate(45deg);
  box-shadow: 0 0 15px #ff1414;
  cursor: pointer;
} /* 左爱心 */
.heart > li::before,
.heart:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #ff1414;
  transform: translateY(-50%);
  border-radius: 50%;
} /*
右爱心 */
.heart > li::after,
.heart:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #ff1414;
  transform: translateX(-50%);
  border-radius: 50%;
}
</style>
>>>>>>> f8b8886670e9124e60f787afde1aace06a60d04c
