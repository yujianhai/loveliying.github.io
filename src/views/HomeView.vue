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
    <div class="imgs">
        <img class="xixi" src="../../src/assets/gif/xixi.gif" alt="" />

        <img draggable="true" class="haha" src="../../src/assets/gif/heihei.gif" alt="" />
        <img draggable="true" class="haha" src="../../src/assets/gif/haha.gif" alt="" />
        <img draggable="true" class="haha" src="../../src/assets/gif/haha2.gif" alt="" />
    </div>

    <div class="container">
        <audio src="../src/assets/music/nx-zuizhon2.mp3" loop preload="auto" width="0px" height="0px" id="LiuYan" class="music"></audio>
        <audio src="../src/assets/music/mycxqd.mp3" loop preload="auto" width="0px" height="0px" id="GeQu" class="music"></audio>
        <audio src="../src/assets/music/windy.mp3" loop preload="auto" width="0px" height="0px" id="Xinfeng" class="music"></audio>
        <Top @changeMenu="changeMenu" />
        <div style="display: flex; z-index: 5; justify-content: center; align-items: center">
            <Xinfeng class="subject-page" @changeMenu="changeMenu" v-if="currentMenu == 'Xinfeng'" />
            <GeQu class="subject-page" v-if="currentMenu == 'GeQu'" />
            <LiuYan class="subject-page" v-if="currentMenu == 'LiuYan'" />
        </div>
    </div>
</template>

<style scoped>
img {
    width: 20vmin;
    height: 20vmin;
    pointer-events: none;
    z-index: 0;
}

.imgs {
    box-sizing: border-box;
    padding: 0 2vmin;
    width: 100%;
    position: fixed;
    bottom: 1vmin;
    display: flex;
    justify-content: space-between;
}

.subject-page {
    transform: all 2s;
}
</style>
