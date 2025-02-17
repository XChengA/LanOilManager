<template>
  <div class="container">对不起，您搜索的内容暂未收录，我们会努力更新……</div>
</template>
<script setup>
import { reactive } from "vue";
import config from "~/config";

definePageMeta({
  pageTransition: config.getPageTransition("lan-not_find"),
});

const state = reactive({});
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding-top: 200px;
  text-align: center;
  font-size: 1.25rem;
  letter-spacing: 3px;
}
</style>
