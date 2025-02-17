<template>
  <ElRow class="header">
    <ElCol :span="8">
      <ElRow>
        <ElCol :span="5"></ElCol>
        <ElCol :span="19">
          <div class="grid-content head_left">
            <div class="logo">
              <NuxtLink to="/" class="routerText" active-class="activeText">
                <img src="~/images/logo.png" class="img" alt="" srcset="" />
              </NuxtLink>
            </div>
            <div class="shu hidden-xs-only"></div>
            <div class="aboutUs hidden-xs-only">
              <div class="aboutus_text" @click="routerAboutUsHandler">ABOUT US</div>
            </div>
          </div>
        </ElCol>
      </ElRow>
    </ElCol>
    <ElCol :span="16" justify="end">
      <ElRow>
        <ElCol :span="21">
          <div class="grid-content navigation">
            <div class="routerText hidden-xs-only">
              <NuxtLink to="/lan/vegetable_oil" active-class="activeText">
                植物油脂
              </NuxtLink>
            </div>
            <div class="routerText hidden-xs-only">
              <NuxtLink to="/lan/fatty_acid" active-class="activeText"> 脂肪酸 </NuxtLink>
            </div>
            <div class="routerText hidden-xs-only">
              <NuxtLink to="/lan/unsaponifiables" active-class="activeText">
                不皂化物
              </NuxtLink>
            </div>
            <!-- 小尺寸屏幕时显示 -->
          </div>
        </ElCol>
        <ElCol :span="3" class="right">
          <div class="hidden-sm-and-up menu" @click="openMenuClick">
            <svg
              t="1739361743219"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4190"
              width="26"
              height="26"
            >
              <path
                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                p-id="4191"
              ></path>
            </svg>
          </div>
        </ElCol>
      </ElRow>
    </ElCol>
  </ElRow>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { defineEmits, ref } from "vue";
const emit = defineEmits(["openMenu"]);
const router = useRouter();
const routerAboutUsHandler = () => {
  router.push({ path: "/lan/about_us" });
};

const menuStatus = ref(true);

const openMenuClick = () => {
  menuStatus.value = !menuStatus.value;
  emit("openMenu", menuStatus.value); // 触发事件
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 600;
  color: #000;

  .head_left {
    display: flex;
    height: 100px;
    align-items: center;
    .logo {
      width: 4rem;
      .img {
        width: 4rem;
      }
    }
    .shu {
      width: 2px;
      height: 1.3rem;
      border-left: 1px solid #000;
      margin-left: 1.2rem;
    }
    .aboutUs {
      padding-left: 1.2rem;
      position: relative;
      .aboutus_text {
        cursor: pointer;
        width: 9rem;
        cursor: pointer;
        font-size: 1.3rem;
      }
    }
  }

  .navigation {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: flex-end;

    .routerText {
      color: inherit;
      font-size: 1.25rem;
      width: 7rem;
      text-align: right;
    }

    .routerText:hover {
      color: #000;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .menu {
      width: 100%;
      display: flex;
      align-items: center;
    }
  }
}

.activeText{
  color: aquamarine;
}
</style>
