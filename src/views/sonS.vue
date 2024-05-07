<template>
  <div>
    <h1>子组件</h1>
    {{ fmsg }}
    <h1>子传父</h1>
    <el-button @click="sendSon">子组件点击</el-button>
    <h1>**********</h1>
    <doubleBlinds></doubleBlinds>
  </div>
</template>

<script setup lang="ts">
import doubleBlinds from './doubleBlinds.vue'
defineProps<{
  fmsg: string
}>()

const emit = defineEmits(['message'])
const sendSon = () => {
  emit('message', '我来自于子组件!')
}
</script>

<style scoped></style>
