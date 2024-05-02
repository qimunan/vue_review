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

### 5.简单的就是上面这样,顺便进行elment-plus配置
#### 1.配置
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

