<template>
    <div>
        <h1>watchDemo</h1>
        <h1>1.ref基本数据类型</h1>
        <h1>sum:{{ sum }}</h1>
        <el-button @click="sumPlus">点我sum+1</el-button>
        <h1>2.ref对象类型数据</h1>
        <h1>姓名：{{ persion.name }}</h1>
        <h1>年龄：{{ persion.age }}</h1>
        <el-button @click="editName">点我修改name</el-button>
        <el-button @click="editAge">点我修改age</el-button>
        <el-button @click="editPersion">修改整个</el-button>
        <h1>3.reactive复杂数据类型</h1>
        <h1>姓名：{{ persion1.name }}</h1>
        <h1>年龄：{{ persion1.age }}</h1>
        <el-button @click="editName1">点我修改name</el-button>
        <el-button @click="editAge1">点我修改age</el-button>
        <el-button @click="editPersion1">修改整个</el-button>
        <h1>4.情况</h1>
        <h1>姓名：{{ per.name }}</h1>
        <h1>年龄：{{ per.age }}</h1>
        <h1>汽车：{{ per.car.c1 }}，{{ per.car.c2 }}</h1>
        <el-button  @click="changeNmae">修改名字</el-button>
        <el-button  @click="changeAge">修改年龄</el-button>
        <el-button  @click="changeC1">修改汽车1</el-button>
        <el-button  @click="changeC2">修改汽车2</el-button>
        <el-button  @click="changeC">修改all汽车</el-button>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
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

let persion1 = reactive({
    name:'张三',
    age:18
})

const editName = () => {
    persion.value.name = '李四'
}

const editName1 = () => {
    persion1.name = 'zz'
}

const editAge = () => {
    persion.value.age = 20
}

const editAge1 = () => {
    persion1.age = 30
}
const editPersion = () => {
    persion.value = {
        name:'王五',
        age:30
    }
}

const editPersion1 =() =>{
    Object.assign(persion1,{
        name:'赵六',
        age:40
    })
}

// 监事对象的变化，监视单个值需要深度监视
// 侦听器默认不侦听对象属性的变化，需要深度监视
// 第一个参数监视的对象，第二个参数回调函数,第三个配置对象（deep深度,immediate：true立即执行）
const stopWatchs = watch(persion, (newValue, oldValue) => {
    console.log(newValue, oldValue)
},{deep:true,immediate:true})
console.log(stopWatchs);

// 监视reactive对象,默认开启深度,不能关闭，隐式监视
const stopWatchs1 = watch(persion1, (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
console.log(stopWatchs1);

let per = reactive({
    name:'zzz',
    age:18,
    car:{
        c1:'奔驰',
        c2:'宝马'
    }
})

const changeNmae =()=>{
    per.name = 'ldz'
}
const changeAge =()=>{
    per.age = 21
}
const changeC1 =()=>{
    per.car.c2 = '东风'
}
const changeC2 =()=>{
    per.car.c1 = '凯迪拉克'
}
const changeC =()=>{
    per.car = {c1:'别克',c2:'小米'}
}

// 监视对象具体某个属性的变化,基本
// watch(()=>per.name, (newValue, oldValue) => {
//     console.log(newValue, oldValue)
// })

// 监视对象类型,用函数写法，具体属性需要加deep
watch(()=>per.car, (newValue, oldValue) => {
    console.log(newValue, oldValue)
},{deep:true})

watch(()=>[per.name,()=>per.car], (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
</script>

<style scoped>

</style>