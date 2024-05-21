<template>
  <el-input v-model="input" style="width: 240px" placeholder="Please input">
    <template #suffix>
      <Plus />
    </template>
  </el-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const input = ref('')
</script>
<style></style>
