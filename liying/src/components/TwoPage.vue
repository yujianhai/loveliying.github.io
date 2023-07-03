<template>
  <div class="two-page">
    <div class="top">春夏秋冬</div>
    <div class="body">
      <p>
        <div v-for="(item, index) in geci.split(' ')" :key="index">
          {{ item }}
        </div>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      geci: `秋天该很好 你若尚在场 秋风即使带凉 亦漂亮 深秋中的你填密我梦想 就像落叶飞
      轻敲我窗 冬天该很好 你若尚在场 冬天多灰 我们亦放亮 一起坐坐谈谈来日动向
      漠视外间低温 这样唱 能同途偶遇在这星球上 燃亮飘渺人生 我多么够运
      无人如你逗留我思潮上 从没再疑问 这个世界好得很 暑天该很好 你若尚在场
      火一般的太阳在脸上 烧得肌肤如情 痕极又痒 滴着汗的一双 笑着唱
      能同途偶遇在这星球上 是某种缘份 我多么庆幸 如离别 你亦长处心灵上
      宁愿有遗憾 亦愿和你远亦近`,
    };
  },
};
</script>

<style scoped>
.two-page {
  width: 100%;
  /* background-color: aquamarine; */
  min-height: 100%;
  overflow: hidden;
  overflow-y: auto;
}

.top {
  margin-top: 50px;
  font-size: 50px;
  color: black;
  text-align: center;
}

.body {
  font-size: 70px;
}

div {
  display: block;
  width: 100%;
  text-align: center;
  line-height: 50px;
}
</style>