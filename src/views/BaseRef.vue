<template>
    <div>
        <el-button @click="increment">点击次数：{{ count }}</el-button>
        <el-button @click="toback">返回</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const count = ref(0)
const router = useRouter()
const toback = () => {
    router.back()
}
const increment = () => {
    count.value++
}
</script>

<style scoped>

</style>