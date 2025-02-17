<template>
  <div class="container">
    <div class="detil_container" v-if="state.data">
      <div class="com_one">
        <div class="img_container">
          <img :src="state.data.pic" alt="Image" />
        </div>
        <div class="text_container">
          <div class="text_one">{{ state.data.title }}</div>
          <div class="text_two">{{ state.data.EN_name }}</div>
          <div class="text_three">{{ state.data.simpleIntroduce }}</div>
          <div class="text_four" v-html="state.data.ingredient"></div>
        </div>
      </div>
      <div class="com_two">
        <div class="text_one">{{ state.data.effect?.fields_title }}</div>
        <div class="text_two" v-for="effect in state.data.effect?.content">
          {{ effect }}
        </div>
      </div>
      <div class="com_three">
        <div class="text_one">{{ state.data.literature?.fields_title }}</div>
        <div class="text_two" v-for="literature in state.data.literature?.content">
          {{ literature }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import config from "~/config";

definePageMeta({
  pageTransition: config.getPageTransition("lan-vegetable_oil-detil"),
});

const seoConfig = config.getPageSeoConfig("lan-vegetable_oil-detil");
if (seoConfig.type === "useSeoMetaConfig") {
  useSeoMeta(seoConfig.useSeoMetaConfig);
} else if (seoConfig.type === "useHeadConfig") {
  useHead(seoConfig.useSeoMetaConfig);
}

const route = useRoute();

onMounted(() => {
  const id = route.query.id;
  config.vegetable_oil_list.forEach((i) => {
    if (i.id == id) {
      state.data = i.detil;
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

  .detil_container {
    padding-top: 70px;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 50px;
    .com_one {
      width: 80%;
      margin: 0 auto;
      display: flex;
      .img_container {
        width: 30%;
        margin-right: 5%;
        img {
          width: 100%;
        }
      }
      .text_container {
        width: 65%;

        .text_one {
          font-size: 1.25rem;
          font-weight: bolder;
          padding-bottom: 15px;
        }
        .text_two {
          font-size: 1.1rem;
          font-weight: bold;
          padding-bottom: 10px;
        }
        .text_three {
          font-size: 1.1rem;
          padding-bottom: 10px;
          letter-spacing: 5px;
        }
        .text_four {
          font-size: 1.1rem;
          padding-bottom: 10px;
          letter-spacing: 5px;
        }
      }
    }
    .com_two {
      width: 60%;
      margin: 40px auto 0px;

      .text_one {
        font-size: 1.25rem;
        font-weight: bolder;
        padding-bottom: 15px;
        text-align: center;
      }
      .text_two {
        font-size: 1.1rem;
        padding-bottom: 10px;
        text-align: center;
        font-style: italic;
      }
      .text_three {
        font-size: 1.1rem;
        padding-bottom: 10px;
        text-align: center;
        font-style: italic;
      }
    }
    .com_three {
      width: 80%;
      margin: 40px auto 0px;
      .text_one {
        font-size: 1.25rem;
        font-weight: bolder;
        padding-bottom: 15px;
        text-align: center;
      }
      .text_two {
        font-style: italic;
        letter-spacing: 3px;
        padding-left: 50px;
        margin-bottom: 30px;
        position: relative;
      }
      .text_two::before {
        content: "*";
        position: absolute;
        top: 6px;
        left: 0px;
        font-weight: bold;
        font-weight: 1.25rem;
        font-size: 2.25rem;
      }
    }
  }
}
</style>
