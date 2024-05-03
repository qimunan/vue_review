<template>
    <div class="persion-demo">
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <h1>姓名：{{ x.name }}</h1>
        <h1>年龄：{{ x.age }}</h1>
        <h1 v-if="tel">{{ tel }}</h1>
        <el-button type="primary" @click="editNmae">修改名字</el-button>
        <el-button type="primary" @click="editAge">修改年龄</el-button>
        <el-button type="primary" @click="showTel">展示联系方式</el-button>
    </div>
    <newTest></newTest>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import type { Ref } from 'vue'
const name = ref<string>('张三')
// 按照官方说明，上面一种是调用时传入一个泛型参数，来覆盖默认推导行为，可以按照下面的来写
const age: Ref<number> = ref(18)
const tel =ref('')

const showTel:Function = () => {
    tel.value = '12345678'
}

// 他会隐式推导类型，但是我们需要显示标注
interface X {
    name: string
    age: number
}
const x:X = reactive({name:'李三',age:28})

const editNmae:Function = () => {
    name.value = '周某人'
    x.name = '刘大壮'
}
const editAge:Function = () => {
    age.value = 25
    x.age = 22
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>