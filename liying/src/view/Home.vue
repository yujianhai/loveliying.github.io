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
      }, 2000);
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
