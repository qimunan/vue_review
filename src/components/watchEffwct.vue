<template>
    <div>
        <div>{{ count }}</div>
        <el-button @click="count+=10">+10</el-button>
        <div>{{ count1 }}</div>
        <el-button @click="count1+=20">+20</el-button>
    </div>
    <h1>*******</h1>
    <refDemo></refDemo>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const count = ref(0)
const count1 = ref(0)

// 监视自动监视
watchEffect(() => {
    if (count.value >= 25 || count1.value >= 65) {
        console.log('count', count.value,count1.value)
    }
})
</script>

<style scoped></style>