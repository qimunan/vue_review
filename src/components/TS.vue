<template>
    <div>
        <h1>TS接口，泛型，自定义类型</h1>
        <h1>{{ a.name }},{{ a.age }},{{ a.id }}</h1>
        <h1>{{ b[1].name }},{{ b[1].age }},{{ b[1].id }}</h1>
    </div>
</template>

<script setup lang="ts">
// 接口
interface Persion {
    id: number,
    name: string,
    age: number
}

// 自定义类型(泛型)
// type PersionList = Array<Persion>
// 自定义类型
type PersionList = Persion[]
let a: Persion = { id: 1, name: '张三', age: 60 }
let b: PersionList = [
    { id: 1, name: '张三', age: 60 },
    { id: 2, name: '李四', age: 50 },
    { id: 3, name: '王五', age: 40 }
]
</script>

<style scoped></style>