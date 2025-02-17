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
            <div class="search" :class="isSHowSearchAssociate ? 'search_high_light' : ''">
              <input
                type="text"
                placeholder="search..."
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
import config from "~/config";

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
  hiddenSearchAssociateHanlder();
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
        showSearchAssociateHanlder()
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

    .search {
      border: 1px solid #777777;
      margin-left: 40px;
      margin-right: 20px;
      border-radius: 20px;
      width: 210px;
      height: 35px;
      padding-left: 12px;
      padding-top: 3px;
      position: relative;
      transition: box-shadow 200ms ease-out; /* 添加缓出动画 */

      .input {
        outline: none;
        border: none;
        width: 165px;
      }

      .icon {
        position: absolute;
        top: 7px;
        right: 7px;
        width: 20px;
        height: 20px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
      .searchAssociate {
        position: absolute;
        top: 50px;
        left: 0px;
        z-index: 9999;
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
    .search_high_light {
      box-shadow: 0 0 6px 3px #ffde02;
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
</style>
