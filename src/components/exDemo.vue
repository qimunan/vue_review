<template>
    <div>
        a:{{ x.a }}
        b:{{ x.b }}
        <el-button @click="x.a++">a变</el-button>
        <ul>
            <li v-for="(item,index) in y" :key="index">{{ item.name }}</li>
        </ul>
        <el-button @click="y[0].name='哈哈哈'">修改</el-button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
interface X {
    a: number,
    b: string
}
const x = reactive<X>({
    a: 12,
    b: '哈哈'
})

const y = reactive([
        { id: 1, name: '周舟' },
        { id: 2, name: '刘晓琪' },
        { id: 3, name: '一辈子' }
    ])
</script>

<style scoped>
</style>