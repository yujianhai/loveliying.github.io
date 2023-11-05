<script setup>
import { ref, onUnmounted, onMounted } from 'vue'
const content = window.words

const isNight = () => {
    const now = new Date()
    let currentHour = now.getHours()
    if (currentHour >= 18 || currentHour <= 7) {
        return true
    } else {
        return false
    }
}

const date = ref({})

const getTime = () => {
    var time1 = new Date('2022-11-27 5:21:13')
    var time2 = new Date()
    time1 = time1.getTime()
    time2 = time2.getTime()
    var differenceTime = time2 - time1

    let day = Math.floor(differenceTime / (60 * 60 * 24 * 1000))
    let hour = Math.floor((differenceTime - day * 24 * 60 * 60 * 1000) / (60 * 60 * 1000))
    let minute = Math.floor((differenceTime - day * 24 * 60 * 60 * 1000 - hour * (60 * 60 * 1000)) / (60 * 1000))
    let second = Math.floor((differenceTime / 1000) % 60, 10)
    date.value.day = day
    date.value.hour = hour
    date.value.minute = minute
    date.value.second = second
}
let timer = null

onMounted(() => {
    getTime()
    timer = setInterval(() => {
        getTime()
    }, 1000)
})
onUnmounted(() => {
    clearInterval(timer)
})

const isNightClass = ref('')

if (isNight()) {
    isNightClass.value = 'white'
} else {
    isNightClass.value = 'black'
}
</script>
<template>
    <div class="letter">
        <div class="content-head">亲爱的小理同学：</div>
        <div class="content content-neiron" :key="index" v-for="(item, index) in content.split(' ')">
            {{ item }}
        </div>
        <div class="content content-date">余建海</div>
        <div class="content content-date">
            和小理宝宝在一起的
            <span>{{ date.day }} 天 </span>
            <span>{{ date.hour }} 时 </span>
            <span>{{ date.minute }} 分</span>
            <span>{{ date.second }} 秒</span>
        </div>
    </div>
</template>
<style scoped>
.letter {
    padding: 0px 40px;
    font-size: 12px;
    color: v-bind(isNightClass);
    /* padding-bottom: 6vmin; */
    z-index: 2;
}

@media screen and (max-width: 580px) {
    .letter {
        padding: 0px 40px;
        padding-bottom: 6vmin;
        color: v-bind(isNightClass);
    }

    .content-head {
        margin-top: 3vmin;
        font-family: '宋体';
        font-size: 20px !important;
    }

    .content-neiron {
        padding: 3vmin 0 !important;
        font-size: 20px !important;
        font-family: '宋体';
    }
    .content {
        padding: 3vmin 0 !important;
        font-size: 20px !important;
        font-family: '宋体';
    }
}

.content-head {
    margin-top: 3vmin;
    font-family: '宋体';
}

.content {
    padding: 1vmin 0;
    font-size: 14px;
    font-family: '宋体';
}

.content-neiron {
    padding: 1vmin 0;
    font-size: 14px;
    font-family: '宋体';
}

.content-date {
    text-align: right;
}
</style>
