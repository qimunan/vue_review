<template>
  <div>
    <h1>nihao</h1>
    <PersionDemo></PersionDemo>
    <h1>*****</h1>
    <fatherS></fatherS>
    <p>******</p>
    <slotS></slotS>
    <p>父子传值复习</p>
    <reviewF></reviewF>
  </div>
</template>

<script setup lang="ts">
import fatherS from './views/fateherS.vue'
import slotS from './views/slotS.vue'
import reviewF from './views/reviewF.vue'
</script>

<style scoped lang="scss">
h1 {
  background-color: aquamarine;
}
</style>
