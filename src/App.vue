<template>
  <div id="app">
    <!-- 路由两种写法 -->
    <!-- <router-link to="/base">响应式基础</router-link>
      <router-view></router-view> -->
    <el-button @click="toRefBase">响应式基础</el-button>
    <el-button @click="toModel">模版语法</el-button>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router);
const toRefBase = () => {
  router.push('/base')
}
const toModel = () => {
  router.push('/model')
}
</script>

<style scoped></style>