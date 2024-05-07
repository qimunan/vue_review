<template>
  <div>
    <p>父传子</p>
    <reviewS :sendSon="son" @reson="resonValue"></reviewS>
    <p>子传父--{{ showValue }}</p>
  </div>
</template>

<script setup lang="ts">
import reviewS from './reviewS.vue'
import { ref } from 'vue'
const son = ref<string>('我是父组件')
const showValue = ref<string>('')
const resonValue = (sendF: string) => {
  showValue.value = sendF
}
</script>

<style scoped></style>
