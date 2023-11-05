<script setup>
import { ref } from 'vue'
const content = window.words

const isNight = () => {
  const now = new Date()
  let currentHour = now.getHours()
  if (currentHour >= 19 || currentHour <= 7) {
    return true
  } else {
    return false
  }
}

const isNightClass = ref(!isNight() ? 'black' : 'white')
</script>
<template>
  <div class="letter">
    <div class="content-head">亲爱的小理同学：</div>
    <div
      class="content-neiron"
      :key="index"
      v-for="(item, index) in content.split(' ')"
    >
      {{ item }}
    </div>
  </div>
</template>
<style scoped>
.letter {
  padding: 0px 40px;
  font-size: 12px;
  color: v-bind(isNightClass);
  padding-bottom: 6vmin;
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
    padding: 1vmin 0;
    font-size: 20px !important;
    font-family: '宋体';
  }
}

.content-head {
  margin-top: 3vmin;
  font-family: '宋体';
}

.content-neiron {
  padding: 1vmin 0;
  font-size: 14px;
  font-family: '宋体';
}
</style>
