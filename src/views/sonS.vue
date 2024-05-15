<template>
    <div>
        <p>子组件</p>
        <el-button @click="toFather">向父组件传值</el-button>
        <p>父组件信息渲染区域：{{ldz  }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    ldz: string
}>()

const emit = defineEmits(['zz'])
const toFather = () => {
    emit('zz', '子组件传递给父组件的值')
}
</script>

<style scoped>

</style>