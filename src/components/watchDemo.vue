<template>
    <div>
        <h1>1.ref基本数据类型</h1>
        <h1>sum:{{ sum }}</h1>
        <el-button @click="sumPlus">点我sum+1</el-button>
        <h1>2.ref对象类型数据</h1>
        <h1>姓名：{{ persion.name }}</h1>
        <h1>年龄：{{ persion.age }}</h1>
        <el-button @click="editName">点我修改name</el-button>
        <el-button @click="editAge">点我修改age</el-button>
        <el-button @click="editPersion">修改整个</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const sum = ref<number>(0)
const sumPlus = () => {
    sum.value += 1
}
// 监视sum的变化
const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log(newValue, oldValue)
    // 停止监听
    if(newValue>=10){
    stopWatch()
}
})

let persion = ref({
    name:'张三',
    age:18
})
const editName = () => {
    persion.value.name = '李四'
}

const editAge = () => {
    persion.value.age = 20
}
const editPersion = () => {
    persion.value = {
        name:'王五',
        age:30
    }
}

// 监事对象的变化，监视单个值需要深度监视
const stopWatchs = watch(persion, (newValue, oldValue) => {
    console.log(newValue, oldValue)
},{deep:true,immediate:true})

</script>

<style scoped>

</style>