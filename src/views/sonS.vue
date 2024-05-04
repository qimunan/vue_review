<template>
    <div>
        <h1>子组件</h1>
        {{ fmsg }}
    </div>
</template>

<script setup lang="ts">
defineProps<{
    fmsg: string
}>()
</script>

<style scoped>

</style>