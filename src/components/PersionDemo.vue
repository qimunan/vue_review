<template>
    <div class="persion-demo">
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <button @click="showTel">展示联系方式</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
const name: Ref<string> = ref('张三')
const age: Ref<number> = ref(18)
const tel: Ref<string> = ref('123456789')

const showTel = () => {
    alert(tel.value)
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>