<template>
    <div>
        <p>父组件</p>
        <son :ldz="zz" @zz="x"></son>
        <p>子组件信息显示区域：{{ y }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import son from './sonS.vue'
const zz = ref('父组件传递给子组件的值')
const y = ref('')
const x = (e: string) => {
    y.value = e
}
</script>

<style scoped>

</style>