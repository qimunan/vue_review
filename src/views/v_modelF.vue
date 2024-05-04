<template>
    <div>
        <h1>v-modelf</h1>
        <!-- Parent.vue -->
        <!-- <el-input v-model="countModel" /> -->
        <h1>****</h1>
        <v_models v-model="countModel" />
        <p>********</p>
        <touchuan class="log"></touchuan>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import v_models from "./v_modelS.vue"
import touchuan from "./touChuang.vue"
const countModel = ref('父组件')
</script>

<!-- scoped有只能透传给第一个根元素，没有则透传给$attrs显示绑定上的根元素 -->
<style>
.log {
    width: 100px;
    height: 100px;
    background-color: rgb(190, 75, 75);
}
</style>