<template>
  <div class="main">
    <div @click="openIt('信封')" class="container">
      <div class="envelope"></div>
      <div :class="['card', open ? 'card-animation' : '']" id="test">
        <h1 class="message">小理同学，你好哇</h1>
        <div class="pikachu">
          <div class="limbs"></div>
          <div class="heart"></div>
          <div class="arms"></div>
          <div class="smile"></div>
        </div>
      </div>
      <div class="cover"></div>
      <div :class="['lid', open ? 'lid-animation' : '']"></div>
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: "",
    };
  },
  created() {
    this.$eventBus.$on("open-xing", () => {
      this.openIt("信封");
    });
  },
  methods: {
    openIt(value) {
      this.open = value;
      const v2 = document.getElementById("nx");
      v2.volume = 0.5;
      v2.play();
      setTimeout(() => {
        this.$emit("handleOpen", value);
      }, 3000);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
/*重置浏览器样式*/
/*
    使主体居中
    vw：视窗宽度的百分比（1vw 代表视窗的宽度为 1%）
    vh：视窗高度的百分比
*/
.main {
  height: 100%;
  width: 100%;
  background: #ffe3ec;
  font-family: "Pangolin", cursive;
  font-size: 1vmin;
  /*弹性布局*/
  display: flex;
  /*设置flex子项在每个flex行的交叉轴上的中心对齐，交叉轴方向为column，即垂直方向**/
  align-items: center;
  /*设置flex子项在主轴上的中心对齐*/
  justify-content: center;
}

/*
使用相对定位（什么时候用相对定位或绝对定位？在文档流中相对定位的元素占有位置，而且会影响后面的元素（块元素、行内块元素），比如两个div并排，另外一个会换行。而绝对定位就是把该元素从文档流中踢出，不会占用文档流的位置，也不会影响后面的元素。）
vmin：当前 vw 和 vh 中较小的一个值
vmax：当前 vw 和 vh 中较大的一个值
*/
.container {
  position: relative;
  top: 0vmin;
  pointer-events: all;
  cursor: pointer;
  transform: scale(1.5);
}
/*相对定位，并设置背景色和大小*/
.envelope {
  position: relative;
  background: #eb7885;
  height: 30vmin;
  width: 48vmin;
}

.cover {
  position: absolute;
  height: 0;
  width: 0;

  border-bottom: 15vmin solid #f5b5bb;
  border-left: 24vmin solid transparent;
  border-right: 24vmin solid transparent;
  top: 15vmin;
  z-index: 3;
}

.cover::after {
  /*left triangle*/
  position: absolute;
  content: "";
  border-left: 24.5vmin solid #ffbbc1;
  border-bottom: 15vmin solid transparent;
  border-top: 15vmin solid transparent;
  top: -15vmin;
  left: -24vmin;
}

.cover::before {
  position: absolute;
  content: "";
  border-right: 24.5vmin solid #ffbbc1;
  border-bottom: 15vmin solid transparent;
  border-top: 15vmin solid transparent;
  top: -15vmin;
  left: -0.5vmin;
}

/*创建信件打开的动画，使用rotateX()，围绕其在给定的度数在x轴旋转*/
@keyframes open {
  100% {
    transform: rotatex(180deg);
  }
}
/*信件合上的动画*/
@keyframes open-rev {
  from {
    transform: rotatex(-180deg);
  }
}

.lid {
  position: absolute;
  height: 0;
  width: 0;

  border-top: 15vmin solid #ff8896;
  border-left: 24vmin solid transparent;
  border-right: 24vmin solid transparent;

  top: 0;
  /*设置旋转元素的基点位置，为盒子的顶部边缘*/
  transform-origin: top;
  animation: open-rev 2s;
}

.lid.lid-animation {
  animation: open 0.5s;
  animation-fill-mode: forwards;
}

.shadow {
  position: relative;
  top: 3vmin;
  border-radius: 50%;
  opacity: 0.7;
  height: 2vmin;
  width: 48vmin;
  background: #e8c5d0;
}

.card {
  position: absolute;
  /*白色的卡片*/
  background: white;
  height: 25vmin;
  width: 43vmin;
  display: flex;
  /*设置div水平显示*/
  flex-direction: column;
  /*设置flex子项在每个flex行的交叉轴上的中心对齐，交叉轴方向为column，即垂直方向**/
  align-items: center;
  /*设置flex子项在主轴上的中心对齐*/
  justify-content: center;
  left: 2.5vmin;
  top: 0vmin;
  animation: slide-rev 0.2s ease-out;
}

.card.to-big {
}

.card.card-animation {
  animation: slide 2s;
  animation-delay: 0.5s;
  /*把卡面动画地从一个地方移动到另一个地方，并让它停留在那里。*/
  animation-fill-mode: forwards;
}

/*卡片划出信封*/
@keyframes slide {
  80% {
    transform: translatey(-15vmin) scaleX(1.1) scaleY(1.1);
    z-index: 2;
  }
  85% {
    transform: translatey(8vmin) scaleX(1.3) scaleY(1.2);
    z-index: 100;
  }
  90% {
    transform: translatey(-8vmin) scaleX(1.5) scaleY(1.3);
    z-index: 100;
  }
  95% {
    transform: translatey(6vmin) scaleX(1.7) scaleY(1.4);
    z-index: 100;
  }
  98% {
    transform: translatey(-2vmin) scaleX(1.75) scaleY(1.5);
    z-index: 100;
  }
  100% {
    transform: translatey(4vmin) scaleX(1.8) scaleY(1.6);
    z-index: 100;
  }
}
/*卡片落回信封*/
@keyframes slide-rev {
  from {
    transform: translatey(-15vmin);
  }
}

.message {
  position: absolute;
  top: 5vmin;
  word-spacing: 5px;
}

.pikachu {
  position: absolute;
  background: #f9ebaa;
  height: 8vmin;
  width: 10vmin;
  border-radius: 40%;
  top: 15vmin;
  display: flex;
}
.pikachu::before {
  content: "";
  position: absolute;
  background: #f9ebaa;
  height: 6vmin;
  width: 9vmin;
  border-radius: 90% 90% 60% 60%;
  top: -4vmin;
  left: 0.5vmin;
}
.pikachu::after {
  content: "";
  position: absolute;
  background: transparent;
  height: 1vmin;
  width: 1vmin;
  top: 2vmin;
  left: -1.5vmin;
  color: #4a4947;
  border-radius: 50%;
  box-shadow: 4vmin -3.5vmin, 8vmin -3.5vmin, 2vmin -2vmin #fad598,
    10vmin -2vmin #fad598, 3vmin 5vmin #f9ebaa, 9.3vmin 5vmin #f9ebaa;
}

.limbs {
  position: relative;
  width: 0;
  height: 0;
  border-left: 1vmin solid transparent;
  border-right: 1vmin solid transparent;
  border-bottom: 6vmin solid #f9ebaa;
  border-radius: 80%;
  top: -6vmin;
  left: 1vmin;
  transform: rotate(-20deg);
}

.limbs::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 1vmin solid transparent;
  border-right: 1vmin solid transparent;
  border-bottom: 6vmin solid #f9ebaa;
  border-radius: 80%;
  top: 3vmin;
  left: 5vmin;
  transform: rotate(40deg);
}

.limbs::before {
  content: "";
  position: absolute;
  background: #f9ebaa;
  width: 5vmin;
  height: 2vmin;
  border-radius: 40%;
  top: 10vmin;
  left: 4vmin;
  box-shadow: -1vmin 1.5vmin #f9ebaa;
}

.heart {
  position: relative;
  width: 5vmin;
  height: 4vmin;
  top: 2vmin;
  left: 0.6vmin;
}
.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 2.5vmin;
  top: 0;
  width: 2.5vmin;
  height: 4vmin;
  background: #fc978b;
  border-radius: 2.5vmin 2.5vmin 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

.arms {
  position: relative;
  background: #f9ebaa;
  width: 4.2vmin;
  height: 2vmin;
  border-radius: 60% 60% 90% 60% / 50% 50% 90% 90%;
  top: 3vmin;
  left: -5vmin;
}
.arms::after {
  content: "";
  position: absolute;
  background: #f9ebaa;
  width: 4vmin;
  height: 2vmin;
  border-radius: 60% 60% 90% 60% / 50% 50% 90% 90%;
  left: 5vmin;
  top: 0vmin;
}

.smile {
  position: relative;
  background: transparent;
  height: 1vmin;
  width: 1vmin;
  border-radius: 50%;
  border-bottom: 0.3vmin solid #4a4947;
  left: -5vmin;
  top: -1.3vmin;
}

.smile::before {
  position: absolute;
  content: "";
  background: transparent;
  height: 1vmin;
  width: 1vmin;
  border-radius: 50%;
  border-bottom: 0.3vmin solid #4a4947;
  left: 0.7vmin;
}
</style>