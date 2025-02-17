<template>
  <div class="container">
    <div class="view">
      <div class="text_container">
        <h2 class="head">WHO WE AER</h2>
        <p class="text">
          LAN是一家做纯净功效护肤的品牌，我们秉承做少做好、真实真诚、持续理他的价值观，希望让美称为简单愉悦的事，我们坚持纯净就是新的自然，我们主张愈肤愈心，致力于为客户创造能激活“身心灵”的美好作品。
        </p>
      </div>
      <div class="text_container">
        <h2 class="head">WHY WE DO</h2>
        <p class="text">
          植物油脂具有天然的渗透力和修复力，能够动态调节肌肤水油，将养分锁在肌底，还原宛若初生的肌肤状态。“以油养肤”不只是一种概念，我们希望能够与大家一起分享和欣赏植物油脂的魅力所在，通过更加科学的视角发掘植物油脂、解读植物油脂、应用植物油脂。
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import config from "~/config";

definePageMeta({
  pageTransition: config.getPageTransition("lan-about_us"),
});

const seoConfig = config.getPageSeoConfig("lan-about_us");
if (seoConfig.type === "useSeoMetaConfig") {
  useSeoMeta(seoConfig.useSeoMetaConfig);
} else if (seoConfig.type === "useHeadConfig") {
  useHead(seoConfig.useSeoMetaConfig);
}

const state = reactive({});
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  .view {
    height: 300px;
    padding-top: 70px;

    .text_container {
      width: 75%;
      margin: 0 auto;
      margin-top: 40px;
      .head {
        padding-bottom: 20px;
        font-size: 1.2rem;
      }
      .text {
        padding-left: 60px;
        font-size: 1.2rem;
        font-style: italic;
        line-height: 3rem;
      }
    }
  }
}
</style>
