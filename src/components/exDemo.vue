<template>
    <div>
        a:{{ x.a }}
        b:{{ x.b }}
        <el-button @click="x.a++">a变</el-button>
        <ul>
            <li v-for="(item,index) in y" :key="index">{{ item.name }}</li>
        </ul>
        <el-button @click="y[0].name='哈哈哈'">修改</el-button>
        <ul>
            <li>{{  z.name }}</li>
        </ul>
        <el-button @click="xiugai">修改</el-button>
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
        { id: 1, name: '周某人' },
        { id: 2, name: '刘大壮' },
        { id: 3, name: '一辈子' }
    ])
    const z = reactive(
        { id: 1, name: '柒木楠' }
    )
    const xiugai:Function=()=>{
        Object.assign(z,{id:2,name:'曦柚'})
    }
</script>

<style scoped>
</style>