<template>
  <div ref="plum">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
function autoFun() {
  // 1、页面一加载就要知道页面宽度计算
  var setFont = function () {
    // 因为要定义变量可能和别的变量相互冲突，污染，所有用自调用函数
    var html = document.documentElement; // 获取html
    // 获取宽度
    var width = html.clientWidth;

    // 判断
    if (width < 1024) width = 1024;
    if (width > 1920) width = 1920;
    // 设置html的基准值
    var fontSize = width / 80 + "px";
    // 设置给html
    html.style.fontSize = fontSize;
  };
  setFont();
  // 2、页面改变的时候也需要设置
  // 尺寸改变事件
  window.onresize = function () {
    setFont();
  };
}

onMounted(() => {
  autoFun();
});
</script>

<style lang="scss">
#__nuxt {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
