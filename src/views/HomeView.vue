<script setup>
//组件
import Top from '@/components/home/Top.vue'
import Xinfeng from '@/views/Xinfeng.vue'
import GeQu from '@/views/GeQu.vue'
import LiuYan from '@/views/LiuYan.vue'

import { ref } from 'vue'

//设置当前播放的音乐
let nowMusic = ''

const currentMenu = ref('Xinfeng')
const changeMenu = (value) => {
  currentMenu.value = value

  let v2 = document.getElementById(nowMusic)
  if (v2) v2.pause()
  //调用父组件传递过来的方法，传入参数修改父组件的值
  v2 = document.getElementById(value)
  v2.play()
  nowMusic = value
}
</script>
<template>
  <img
    draggable="true"
    class="haha"
    src="../../src/assets/gif/haha.gif"
    alt=""
  />
  <img class="xixi" src="../../src/assets/gif/xixi.gif" alt="" />

  <div class="container">
    <audio
      src="../src/assets/music/nx-zuizhon2.mp3"
      loop
      autoplay="autoplay"
      preload="auto"
      width="0px"
      height="0px"
      id="LiuYan"
      class="music"
    ></audio>
    <audio
      src="../src/assets/music/mycxqd.mp3"
      loop
      autoplay="autoplay"
      preload="auto"
      width="0px"
      height="0px"
      id="GeQu"
      class="music"
    ></audio>
    <audio
      src="../src/assets/music/windy.mp3"
      loop
      autoplay="autoplay"
      preload="auto"
      width="0px"
      height="0px"
      id="Xinfeng"
      class="music"
    ></audio>
    <Top @changeMenu="changeMenu" />
    <div
      style="
        display: flex;
        z-index: 5;
        justify-content: center;
        align-items: center;
      "
    >
      <Xinfeng @changeMenu="changeMenu" v-if="currentMenu == 'Xinfeng'" />
      <GeQu v-if="currentMenu == 'GeQu'" />
      <LiuYan v-if="currentMenu == 'LiuYan'" />
    </div>
  </div>
</template>

<style scoped>
img {
  position: fixed;
  width: 20vmin;
  height: 20vmin;
  pointer-events: none;
  z-index: 0;
}

.xixi {
  bottom: 6vmin;
  left: -2vmin;
}
.haha {
  right: 0vmin;
  bottom: 6vmin;
}
</style>
