<!-- Child.vue -->
<script setup>
// const model = defineModel({default:1}) 提供默认值会导致父子组件不同步
const model = defineModel()

function update() {
  model.value++
}
console.log(model)
import { onBeforeMount,onMounted, onBeforeUpdate,onUpdated, onBeforeUnmount, onUnmounted } from 'vue'


onBeforeMount(() => {
  console.log('onBeforeMount: 组件将要挂载');
});
onBeforeUpdate(() => {
  console.log('onBeforeUpdate: 组件将要更新');
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount: 组件将要卸载');
});
onMounted(() => {
  console.log('onMounted: 组件已挂载');
});

// 在组件更新后执行的操作
onUpdated(() => {
  console.log('onUpdated: 组件已更新');
});

// 在组件卸载前执行的操作
onUnmounted(() => {
  console.log('onUnmounted: 组件将被卸载');
});
</script>

<template>
  <div>parent bound v-model is: {{ model }}</div>
  <el-input v-model="model"></el-input>
  <el-button @click="update">update</el-button>
</template>
