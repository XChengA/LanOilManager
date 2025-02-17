<template>
  <main class="unsaponifiables page-content">
    <div class="unsaponifiables_container" >
      <section class="content" v-for="(item, index) in state.data" :key="index">
        <h4 class="title text-xl">{{ item.title }}</h4>
        <div class="item flex-start flex-1 flex-wrap">
          <div
            v-for="categories in item.categories"
            :key="categories.id"
            class="text-xl"
            @click="skipToDetail(item.id, categories.id)"
          >
            {{ categories.name }}
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import config from "~/config";

definePageMeta({
  pageTransition: config.getPageTransition('lan-unsaponifiables'),
});

const seoConfig = config.getPageSeoConfig("lan-unsaponifiables");
if (seoConfig.type === "useSeoMetaConfig") {
  useSeoMeta(seoConfig.useSeoMetaConfig);
} else if (seoConfig.type === "useHeadConfig") {
  useHead(seoConfig.useSeoMetaConfig);
}


const state = reactive({
  data: config.unsaponifiables_list,
});
const router = useRouter();

const skipToDetail = (itemID, categoriesID) => {
  router.push({
    name: "lan-unsaponifiables-detail",
    query: {
      itemID,
      categoriesID,
    },
  });
};
</script>

<style scoped lang="scss">
.unsaponifiables {
  .unsaponifiables_container {
    padding-top: 2.125rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .content {
      box-sizing: border-box;
      min-width: 350px;
      width: 50%;
      margin-top: 30px;
      .title {
        width: 10rem;
        font-weight: 700;
        background-color: #e6e6e6;
        padding: 0.625rem 0 0.625rem 1.5rem;
        margin: 0 auto;
        margin-bottom: 1.875rem;
        border-radius: 5%;
        letter-spacing: 1.5rem;
        text-align: center;
      }

      .item > div {
        cursor: pointer;
        line-height: 2.5;
        width: 50%;
        flex-grow: 0;
        flex-shrink: 0;
        text-align: center;
        font-weight: 700;

      }
    }

    .content:last-child .item > div {
      width: 100%;
    }
  }
}
</style>
