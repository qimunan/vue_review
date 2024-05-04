<!-- Child.vue -->
<script setup>
// const model = defineModel({default:1}) 提供默认值会导致父子组件不同步
const model = defineModel()

function update() {
  model.value++
}
console.log(model);
</script>

<template>
  <div>parent bound v-model is: {{ model }}</div>
  <el-input v-model="model"></el-input>
  <el-button @click="update">update</el-button>
</template>