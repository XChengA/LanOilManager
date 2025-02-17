<template>
  <div class="container">
    <div class="view">
      <div class="table_container">
        <div class="tr jg">
          <ul class="">
            <li class="title">结构</li>
            <li class="item" v-for="item in state.list">
              <img
                :src="item.pic"
                :class="item.spTag ? 'spTag' : ''"
                @click="goDetilHandle(item)"
              />
            </li>
          </ul>
        </div>
        <div class="tr">
          <ul>
            <li class="title">系统名称</li>
            <li
              class="item cn_name"
              @click="goDetilHandle(item)"
              v-for="item in state.list"
            >
              {{ item.cn_name }}
            </li>
          </ul>
        </div>
        <div class="tr">
          <ul>
            <li class="title">Δ 表示法</li>
            <li class="item" v-for="item in state.list">
              {{ item.expression_way }}
            </li>
          </ul>
        </div>
        <div class="tr">
          <ul>
            <li class="title">英文名</li>
            <li class="item" v-for="item in state.list">{{ item.en_name }}</li>
          </ul>
        </div>
        <div class="tr">
          <ul>
            <li class="title">俗名</li>
            <li class="item" v-for="item in state.list">{{ item.trivial_name }}</li>
          </ul>
        </div>
        <div class="tr">
          <ul>
            <li class="title">分子式</li>
            <li class="item" v-for="item in state.list">
              {{ item.molecular_formula }}
            </li>
          </ul>
        </div>
        <div class="tr">
          <ul>
            <li class="title">分子量</li>
            <li class="item" v-for="item in state.list">
              {{ item.molecular_weight }}
            </li>
          </ul>
        </div>
        <div class="tr">
          <ul>
            <li class="title">CAS号</li>
            <li class="item" v-for="item in state.list">{{ item.CAS_number }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import config from "~/config";

definePageMeta({
  pageTransition: config.getPageTransition('lan-fatty_acid'),
});

const seoConfig = config.getPageSeoConfig("lan-fatty_acid");
if (seoConfig.type === "useSeoMetaConfig") {
  useSeoMeta(seoConfig.useSeoMetaConfig);
} else if (seoConfig.type === "useHeadConfig") {
  useHead(seoConfig.useSeoMetaConfig);
}


const router = useRouter();

const goDetilHandle = (item) => {
  router.push({
    name: item.routerConfig.name,
    query: {
      id: item.id,
    },
  });
};

const state = reactive({
  list: config.FATTY_ACID_LIST,
});
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
    padding-top: 70px;
    overflow-x: auto;
    width: 100%;
    .table_container {
      margin: 0 auto;
      display: flex;
      min-width: 600px;
      justify-content: space-around;
      flex-direction: row;
      flex-wrap: nowrap;
      .jg {
        .title {
          width: 8rem;
        }
        .item {
          width: 8rem;
          img {
            width: 50%;
            cursor: pointer;
          }
          .spTag {
            width: 100%;
          }
        }
      }
      .tr {
        ul {
          .title {
            font-size: 1.05rem;
            font-weight: 900;
            text-align: center;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .item {
            text-align: center;
            height: 90px;
            font-size: 1.05rem;
            padding-left: 10px;
            padding-right: 10px;
          }
          .cn_name {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
