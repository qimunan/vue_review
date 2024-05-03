<template>
    <div>
        <h1>姓名：{{ persion.name }}</h1>
        <h1>年龄：{{ persion.age }}</h1>
        <h1>性别：{{ persion.sex }}</h1>
        <h1>地址：{{ persion.address }}</h1>
        <el-button @click="editName">修改名字</el-button>
        <el-button @click="editAge">修改年龄</el-button>
    </div>
    <watchDemo></watchDemo>
    <h1>**************</h1>
    <watchEffwct></watchEffwct>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
interface Person {
    name: string;
    age: number;
    sex: string;
    address: string;
}


let persion = reactive<Person>({
    name: '张三',
    age: 18,
    sex: '男',
    address: '北京'
})

// 结构需要toRefs
let { name, age } = toRefs(persion);

const editName: Function = () => {
    name.value = '李四';
}

const editAge: Function = () => {
    age.value = 20;
}
</script>

<style scoped></style>