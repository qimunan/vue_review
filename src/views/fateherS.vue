<!-- 父组件father.vue -->
<template>
    <div>
        <h1>父组件</h1>
        <h1>*********</h1>
        <Son :fmsg="fatherMsg"></Son>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from './sonS.vue'
const fatherMsg = ref<string>('hello world')
</script>

<style scoped>

</style>