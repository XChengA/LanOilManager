<template>
  <div class="box" ref="container">
    <div class="head_container">
      <layoutHeadCommonhead @openMenu="openMenuHandle"></layoutHeadCommonhead>
    </div>

    <!-- 主体内容 -->
    <div class="main_container" ref="main_container">
      <!-- <NuxtPage class="grid-content ep-bg-purple" /> -->
      <div class="main">
        <div class="center">
          <p class="text1">LAN-oil External&emsp;LAB</p>
          <p class="text2">蘭外部植物油脂实验室</p>
          <div class="search">
            <input
              type="text"
              class="input"
              v-model="searchValue"
              @input="searchInputHanlder"
              @focus="searchIptFocusHanlder"
              @blur="searchIptBlurHanlder"
              @keydown.enter="searchEnterKeyDownHandle"
            />
            <i class="icon" @click="searchEnterKeyDownHandle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
                ></path>
              </svg>
            </i>
            <div
              class="searchAssociate"
              v-show="isSHowSearchAssociate && searchAssociateList.length"
            >
              <div
                class="item"
                v-for="searchField in searchAssociateList"
                :class="
                  currentMouseEntersearchFieldVal.id === searchField.id
                    ? 'activeItem'
                    : ''
                "
                @click="searchFieldClickHandler(searchField)"
                @mouseenter="searchFieldMouseEnterHandler(searchField)"
              >
                {{ searchField.keyword }}
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <p class="text1">蘭为植物油脂提供更科学的信息指引</p>
          <p class="text2">
            LAN provide more scientific information guidance for vegetable oils and fats
          </p>
        </div>
      </div>

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
import { ref, onMounted, onUnmounted } from "vue";
import config from "~/config";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

definePageMeta({
  pageTransition: config.getPageTransition("index"),
});

const seoConfig = config.getPageSeoConfig("index");
if (seoConfig.type === "useSeoMetaConfig") {
  useSeoMeta(seoConfig.useSeoMetaConfig);
} else if (seoConfig.type === "useHeadConfig") {
  useHead(seoConfig.useSeoMetaConfig);
}

// 搜索功能
const isSHowSearchAssociate = ref(false);
const searchFieldList = config.searchFieldList;
const searchAssociateList = ref([]);
const searchValue = ref("");
// 鼠标最后一次进入的搜索提示关键词字段
const currentMouseEntersearchFieldVal = ref(null);
// 显示搜索提示关键词容器
const showSearchAssociateHanlder = () => {
  isSHowSearchAssociate.value = true;
};
// 掩藏搜索提示关键词容器
const hiddenSearchAssociateHanlder = () => {
  isSHowSearchAssociate.value = false;
};
// 根据搜索字段进入对应目标页面
const enterTagPageWithSearchField = (csField) => {
  if (csField) {
    router.push({
      name: csField.routerConfig.name,
      query: csField.routerConfig.query,
    });
  } else {
    router.push({
      name: "lan-not_find",
    });
  }
};

const searchInputHanlder = (e) => {
  searchAssociateList.value.length = 0;
  searchFieldList.forEach((searchField) => {
    if (searchValue.value) {
      const searchContentInThisField = searchField.filterField.includes(
        searchValue.value
      );
      if (searchContentInThisField) {
        searchAssociateList.value.push(searchField);
      }
    }
    currentMouseEntersearchFieldVal.value = searchAssociateList.value.length
      ? searchAssociateList.value[0]
      : null;
  });
};

// 点击搜索结果字段事件
const searchFieldClickHandler = (searchField) => {
  enterTagPageWithSearchField(searchField);
};

// 鼠标进入搜索结果字段事件
const searchFieldMouseEnterHandler = (currentMouseEntersearchField) => {
  currentMouseEntersearchFieldVal.value = currentMouseEntersearchField;
};

// 焦点搜索结果字段事件
const searchIptFocusHanlder = () => {
  showSearchAssociateHanlder();
};
// 失去焦点搜索结果字段事件
const searchIptBlurHanlder = () => {
  setTimeout(() => {
    hiddenSearchAssociateHanlder();
  }, 200);
};

// 点击搜索图标【回车】事件
const searchEnterKeyDownHandle = () => {
  if (searchValue.value) {
    enterTagPageWithSearchField(currentMouseEntersearchFieldVal.value);
  }
};

// 键盘按钮↑ ↓ 事件
const handleKeyDown = (event) => {
  const searchAssociateList_length = searchAssociateList.value.length;
  if (searchAssociateList_length <= 1) return;
  const idx = searchAssociateList.value.findIndex(
    (item) => item.id === currentMouseEntersearchFieldVal.value.id
  );
  if (event.key === "ArrowUp") {
    // 上移
    event.preventDefault();
    if (idx == 0) {
      currentMouseEntersearchFieldVal.value =
        searchAssociateList.value[searchAssociateList_length - 1];
    } else {
      currentMouseEntersearchFieldVal.value = searchAssociateList.value[idx - 1];
    }
  } else if (event.key === "ArrowDown") {
    // 下移
    event.preventDefault();
    if (idx == searchAssociateList_length - 1) {
      currentMouseEntersearchFieldVal.value = searchAssociateList.value[0];
    } else {
      currentMouseEntersearchFieldVal.value = searchAssociateList.value[idx + 1];
    }
  }
};

// 监听键盘事件
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

// 移除事件监听
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

// 小屏幕时 点击右上角菜单按钮 显示的菜单列表遮罩层
const menuMaskIsShow = ref(false);
const openMenuHandle = () => {
  menuMaskIsShow.value = !menuMaskIsShow.value;
};

const routerHandle = (path) => {
  menuMaskIsShow.value = false;
  router.push({ path: path });
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  background-image: url("../assets/img/grease.png");
  background-repeat: no-repeat;
  background-size: cover;

  .main_container {
    width: 100%;
    height: calc(100vh - 80px);
    overflow: hidden;
    position: relative;

    .main {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-top: 10rem;
      .center {
        text-align: center;
        max-width: 90%;
        .text1 {
          font-size: 2.8rem;
          color: #767171;
          font-style: italic;
        }
        .text2 {
          width: 100%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          font-size: 1.5rem;
          font-weight: 600;
          font-style: italic;
          line-height: 70px;
        }
        .search {
          margin-top: 50px;
          border-bottom: 1px solid #777777;
          height: 62px;
          padding-left: 12px;
          padding-top: 12px;
          position: relative;
          text-align: left;
          .input {
            outline: none;
            border: none;
            width: 550px;
            height: 50px;
          }

          .icon {
            position: absolute;
            top: 25px;
            right: 7px;
            width: 20px;
            height: 20px;
            cursor: pointer;
            svg {
              width: 20px;
              height: 20px;
              color: #4ab18e;
            }
          }
          .searchAssociate {
            position: absolute;
            top: 80px;
            left: 0px;
            width: 100%;
            border-radius: 10px;
            padding: 15px 0px;
            background-color: #fff;
            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
            .item {
              padding: 15px 15px;
              font-size: 18px;
            }
            .activeItem {
              background-color: #e1e1e1;
            }
          }
        }
      }
      .footer {
        height: 140px;
        text-align: center;
        line-height: 2rem;
        .text1 {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.5em;
        }

        .text2 {
          letter-spacing: 0.3em;
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
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

.guard_to_home {
  font-weight: 900;
}

.activeText {
  color: #000;
}

.search_head {
  width: 200px;
}
</style>
