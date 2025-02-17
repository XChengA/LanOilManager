<template>
  <div class="container">
    <div class="view" v-if="state.data">
      <div class="left">
        <div class="text_one">{{ state.data.cnName }}</div>
        <div class="text_two">{{ state.data.enName }}</div>
        <div class="text_three">来源：{{ state.data.enName }}</div>
        <div class="text_four">功效：{{ state.data.efficacy }}</div>
        <div class="text_five">衍生文献：</div>
        <template v-for="literature in state.data.literature">
          <div class="text_six">
            {{ literature.source }}
          </div>
          <div class="text_seven">
            {{ literature.des }}
          </div>
        </template>
      </div>
      <div class="right">
        <div class="img_container">
          <img :src="state.data.pic" alt="" srcset="" />
        </div>
        <div class="text">CAS号:{{ state.data.cas }}</div>
        <div class="text">化学式:{{ state.data.chemicalFormula }}</div>
        <div class="text">分子量:{{ state.data.molecularWeight }}</div>
        <div class="text">密度:{{ state.data.density }}</div>
        <div class="text">熔点:{{ state.data.melting }}</div>
        <div class="text">沸点:{{ state.data.boiling }}</div>
        <div class="text">酸度系数:{{ state.data.acidity }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import config from "~/config";

definePageMeta({
  pageTransition: config.getPageTransition('lan-unsaponifiables-detil'),
});

const seoConfig = config.getPageSeoConfig("lan-unsaponifiables-detil");
if (seoConfig.type === "useSeoMetaConfig") {
  useSeoMeta(seoConfig.useSeoMetaConfig);
} else if (seoConfig.type === "useHeadConfig") {
  useHead(seoConfig.useSeoMetaConfig);
}


const route = useRoute();
onMounted(() => {
  const itemID = route.query.itemID;
  const categoriesID = route.query.categoriesID;
  config.unsaponifiables_list.forEach((i) => {
    if (i.id == itemID) {
      i.categories.forEach((e) => {
        if (e.id == categoriesID) {
          state.data = e.detil;
        }
      });
    }
  });
});
const state = reactive({
  data: null,
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
    padding-top: 50px;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .left {
      min-width: 350px;
      width: 50%;
      .text_one {
        font-size: 1.25rem;
        font-weight: 900;
        padding-left: 7rem;
        margin-bottom: 10px;
      }
      .text_two {
        font-size: 1.25rem;
        padding-left: 7rem;
      }
      .text_three {
        font-size: 1.25rem;
        font-weight: 900;
        padding-left: 7rem;
        padding-top: 1.25rem;
      }
      .text_four {
        font-size: 1.25rem;
        font-weight: 900;
        padding-left: 7rem;
        padding-top: 1.25rem;
      }
      .text_five {
        font-size: 1.25rem;
        font-weight: 900;
        padding-left: 7rem;
        padding-top: 1.25rem;
      }
      .text_six {
        font-size: 0.85rem;
        padding-left: 7rem;
        padding-top: 1.25rem;
        position: relative;
        letter-spacing: 3px;
      }
      .text_six::before {
        content: "*";
        position: absolute;
        top: 40px;
        left: 0px;
        font-weight: bold;
        font-size: 2.25rem;
      }
      .text_seven {
        font-size: 0.85rem;
        padding-left: 7rem;
        padding-top: 1.25rem;
        font-style: italic;
      }
    }
    .right {
      min-width: 350px;
      width: 50%;
      .img_container {
        padding-left: 7rem;
        width: 22rem;
        img {
          width: 100%;
        }
      }
      .text {
        font-size: 1rem;
        padding-left: 7rem;
        padding-top: 1.25rem;
        letter-spacing: 3px;
      }
    }
  }
}
</style>
