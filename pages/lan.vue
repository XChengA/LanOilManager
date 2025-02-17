<template>
  <div class="box " ref="container">
    <layout></layout>
  </div>
</template>
  
<script setup>
</script>
  
<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  .head_box {
  }

  .main_container {
    width: 100%;
    height: calc(100vh - 51px);
    overflow: hidden;
  }
}


</style>
  