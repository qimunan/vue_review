<template>
    <div>
        <!-- query传参 -->
        <!-- <li>id:{{ route.query.id }}</li>
        <li>标题：{{ route.query.title }}</li> -->
        <!-- 解构写法 -->
        <!-- <li>id:{{ query.id }}</li>
        <li>标题：{{ query.title }}</li> -->
        <!-- <li>id:{{ params.id }}</li>
        <li>标题：{{ params.title }}</li> -->
        <!-- props参数 -->
        <li>id:{{ id }}</li>
        <li>标题：{{ title }}</li>
    </div>
</template>

<script setup lang="ts">
// import { toRefs } from 'vue';
// import { useRoute } from 'vue-router'
// const route = useRoute()
// // 解构写法
// const { query,params } = toRefs(route)
// console.log(route);
// defineProps({
//     id: Number,
//     title: String
// })
defineProps(['id','title'])
</script>

<style scoped></style>