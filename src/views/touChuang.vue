<template>
    <div>
        <p>1111</p>
        <!-- 透传过来的直接可以通过 $attrs 获取到 -->
        <!-- <p>透传过来的类名：{{ $attrs }}</p> -->
    </div>
    <div v-bind="$attrs" class="a">
        <p>1111</p>
    </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
// 组件内不透传需要设置如下属性
// defineOptions({
//   inheritAttrs: false
// })
// 控制台要想拿到透传属性需要按照如下操作
const attrs = useAttrs()
console.log(attrs);

</script>

<style scoped></style>