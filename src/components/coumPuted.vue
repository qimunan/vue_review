<template>
    <div>
        <h1>计算属性</h1>
        姓：<el-input v-model="firstName" />
        名:<el-input v-model="lastName" />
        <el-button @click="edit">edit</el-button>
        全名:<span>{{ fullName }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref<string>('')
const lastName = ref<string>('')
// 计算属性，有缓存   
let fullName = computed({
    get(){
        return firstName.value + lastName.value
    },
    set(val){
        console.log(val);
        const [first, last] = val.split('g')
        console.log(first, last);
        
        firstName.value = first
        lastName.value = last
    }
})
const edit: Function = () => {
    fullName.value = 'zhangsan'
}
</script>

<style scoped></style>