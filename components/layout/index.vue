<template>
  <div class="layout" ref="container">
    <div class="head_container">
      <layoutHeadSearchhead @openMenu="openMenuHandle"></layoutHeadSearchhead>
    </div>

    <!-- 主体内容 -->
    <div class="main_container" ref="main_container">
      <NuxtPage class="grid-content ep-bg-purple" />
      <!-- 菜单遮罩 -->
      <div class="menuMask" v-if="menuMaskIsShow">
        <div class="routerText">
          <a @click="routerHandle('/lan/about_us')"> about us </a>
        </div>
        <div class="routerText">
          <a @click="routerHandle('/lan/vegetable_oil')"> 植物油脂 </a>
        </div>
        <div class="routerText">
          <a @click="routerHandle('/lan/fatty_acid')"> 脂肪酸 </a>
        </div>
        <div class="routerText">
          <a @click="routerHandle('/lan/unsaponifiables')"> 不皂化物 </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const menuMaskIsShow = ref(false);
const openMenuHandle = () => {
  menuMaskIsShow.value = !menuMaskIsShow.value;
};

const router = useRouter();
const routerHandle = (path) => {
  menuMaskIsShow.value = false;
  router.push({ path: path });
};


</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  .head_container {
  }

  .main_container {
    width: 100%;
    height: calc(100vh - 80px);
    overflow: hidden;
    position: relative;
    .menuMask {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: calc(100vh - 80px);
      background-color: #008285;
      .routerText {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.25;
        text-decoration: none;
        min-height: 52px;
        padding: 16px 45px;
        transition: color 0.35s ease, background-color 0.15s linear;
        a {
          color: #fff !important;
        }
      }
    }
  }
}
</style>
