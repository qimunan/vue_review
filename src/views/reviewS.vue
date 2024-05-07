<template>
  <div>
    <p>子组件</p>
    <p>父组件穿的值{{ sendSon }}</p>
    <el-button @click="sendF">点击传入父组件</el-button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sendSon: string
}>()
const emit = defineEmits(['reson'])
const sendF = () => {
  emit('reson', '子组件的值')
}
</script>

<style scoped></style>
