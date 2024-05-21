<template>
  <div>
      <BatchInput v-model="state.billcode"></BatchInput>
      <uploadTable></uploadTable>
      <upload></upload>
  </div>
</template>

<script setup lang="ts">;
import BatchInput from './views/login/BatchInput.vue'
import uploadTable from './views/login/uploadTable.vue'
import upload from './views/login/upload.vue';
import {reactive, watch } from 'vue'
const state = reactive({
    billcode: ''
    // textInput: ''
})

watch(
    () => state.billcode,
    value => {
        state.billcode = value;
    },
    { immediate: true }

);
</script>

<style scoped>

</style>