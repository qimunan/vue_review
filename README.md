# 这是一个vue3复习项目
## 1.从这里拉取代码
```bash
git clone https://github.com/zhangyuang/vue3-review.git
```
## 2.安装依赖
```bash
npm install
```
## 3.运行项目
```bash
npm run dev
```
# 开始学习
## 1.创建项目
```bash
npm create vue@latest
```
## 2.进入项目安装依赖

## 3.运行项目

## 4.开始写代码

### 1.删除src文件夹
### 2.自己创建src文件夹
### 3.配置main.ts,参数如下
```ts
    import { createApp } from 'vue'
    import App from './App.vue'

    createApp(App).mount('#app')
```

### 4.创建App.vue，利用vbase选择ts+stup创建代码块如下，语法糖形式书写
```vue
<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
 //书写ts代码，需要引入ref
 //这个地方两种写法，按照官方文档说，ref<string>是覆盖默认推导行为
 //1.const msg:Ref<string> = ref('hello world')
 const msg = ref<string>('hello world')
</script>

<style scoped>

</style>
```

## 5.简单的就是上面这样,顺便进行elment-plus配置
### 1.配置
我们找到element-plus官网查看配置文档，按照按需加载来配置
[配置地址](https://element-plus.org/zh-CN/guide/quickstart.html)
在快速开始的按需导入

## 6.基础语法
### 1.ref 和 reactive（响应式数据）
ref(基本数据类型和对象数据类型)
reactive(只能定义对象数据类型)
```vue
<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const msg = ref<string>('hello world')
// 他会隐式推导类型，但是我们需要显示标注
interface X {
    name: string
    age: number
}
const x:X = reactive({name:'张三',age:18})
</script>

<style scoped>

</style>
```
### 2.computed
```vue
<script setup lang="ts">

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
```

### 3.watch
```vue
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
```

### 4.watchEffect
```vue
<script setup lang="ts">

import { ref, watchEffect } from 'vue'
const count = ref(0)
const count1 = ref(0)
// 监视自动监视
watchEffect(() => {
    if (count.value >= 25 || count1.value >= 65) {
        console.log('count', count.value,count1.value)
    }
})
</script>
```

## 7.TS
### 1.接口
```ts
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
```
