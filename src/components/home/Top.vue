<script setup>
import { ref, defineEmits, defineProps } from 'vue'
const state = ref(['Xinfeng', 'GeQu', 'LiuYan'])

// 接收父组件传递过来的方法
const emit = defineEmits(['changeMenu'])
const props = defineProps({
    currentMenu: {
        type: String,
        default: 'Xinfeng',
    },
})
const currentMenu = ref('Xinfeng')

const handelClick = function (item) {
    console.log(props.currentMenu)
    //调用父组件传递过来的方法，传入参数修改父组件的值
    currentMenu.value = item
    emit('changeMenu', item)
}

const getMenuName = (type) => {
    const nameObj = {
        Xinfeng: '回到封面',
        GeQu: '《春夏秋冬》',
        LiuYan: '写给小理',
    }

    return nameObj[type]
}

const isNightClass = ref('')

const isNight = () => {
    const now = new Date()
    let currentHour = now.getHours()
    if (currentHour >= 18 || currentHour <= 7) {
        return true
    } else {
        return false
    }
}

if (isNight()) {
    isNightClass.value = 'white'
} else {
    isNightClass.value = 'black'
}
</script>
<template>
    <div class="top">
        <div @click="handelClick(item)" :class="{ active: item == props.currentMenu }" class="item" v-for="(item, index) in state" :key="index">
            {{ getMenuName(item) }}
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 580px) {
    .top .item {
        font-size: 18px !important;
    }
}
.top {
    position: sticky;
    top: 0;
    padding-top: 0px;
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    pointer-events: all;
    z-index: 22;
    background-size: cover;
    background-attachment: fixed;
}

.top::after {
    content: '';
    filter: blur(10px);
}

.top .item {
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #dca68b;
}
.top .item.active {
    box-shadow: 0 0 4px 4px pink;
    color: #f1939c;
    transition: all 1s;
}
</style>
