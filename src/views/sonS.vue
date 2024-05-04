<template>
    <div>
        <h1>子组件</h1>
        {{ fmsg }}
        <h1>子传父</h1>
        <el-button @click="sendSon">子组件点击</el-button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps<{
    fmsg: string
}>()

const emit = defineEmits(['message'])
const sendSon = () => {
    emit('message', 'Hello from Child!');
}
</script>

<style scoped></style>