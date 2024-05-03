<template>
    <div>
        <h1>refDemo</h1>
        <h1 ref="hh">hah</h1>
        <h1>iiii</h1>
        <el-button @click="out">输出第二个h1</el-button>
    </div>
    <h1>***********</h1>
    <TS></TS>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hh = ref()
const out = () => {
    // 获取ref为hh的元素
   console.log(hh.value);
}
</script>

<style scoped>

</style>