<template>
  <div class="container">
    <div class="view" v-if="state.list.length">
      <div class="list_container">
        <div class="item" v-for="item in state.list" @click="goDetil(item)">
          <div class="image_container">
            <img :src="item.pic" alt="Image" />
          </div>
          <div class="CN_name">{{ item.CN_name }}</div>
          <div class="EN_name">{{ item.EN_name }}</div>
        </div>
        <!-- vnode -->
        <div class="item" v-for="item in 5">
          <div class=""></div>
          <div class="CN_name"></div>
          <div class="EN_name"></div>
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
  pageTransition: config.getPageTransition("lan-vegetable_oil"),
});
const router = useRouter();

const seoConfig = config.getPageSeoConfig("lan-vegetable_oil");
if (seoConfig.type === "useSeoMetaConfig") {
  useSeoMeta(seoConfig.useSeoMetaConfig);
} else if (seoConfig.type === "useHeadConfig") {
  useHead(seoConfig.useSeoMetaConfig);
}

const goDetil = (item) => {
  router.push({
    name: item.routerConfig.name,
    // param: {
    //   item,
    // },
    query: {
      id: item.id,
    },
  });
};

const state = reactive({
  list: config.vegetable_oil_list,
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
    height: 300px;
    padding-top: 30px;

    .list_container {
      max-width: 80%;
      margin: 0 auto;
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .item {
        width: 230px;
        text-align: center;
        padding-top: 8px;
        padding-bottom: 18px;
        margin: 0px 20px;
        display: inline-block;

        .image_container {
          width: 220px;
          height: 220px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .CN_name {
          width: 100%;
          font-size: 1.1rem;
          font-weight: 600;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding: 10px 10px;
          cursor: pointer;
        }
        .EN_name {
          padding: 4px 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
