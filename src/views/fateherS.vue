<!-- 父组件father.vue -->
<template>
    <div>
        <h1>父组件</h1>
        <h1>*********</h1>
        <p>{{ resonvalue }}</p>
        <Son :fmsg="fatherMsg" @message="reson"></Son>
        <ftoS>
            <template #a>
            <div>这是父组件</div>
        </template>
        </ftoS>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from './sonS.vue'
import ftoS from './ftoS.vue'
const fatherMsg = ref<string>('我是父组件传递消息')
const resonvalue = ref<string>('')
const reson = (msg: string) => {
    resonvalue.value = msg
}
</script>

<style scoped>

</style>