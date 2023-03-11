<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./view/Home2.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
    background: #FFE3EC;
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
