<template>
  <div id="app">
    <h1>vue-router</h1>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link :to="{ name: 'news' }">新闻</router-link>
      <router-link :to="{ path: '/about' }">关于</router-link>
    </div>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router);

</script>

<style scoped></style>