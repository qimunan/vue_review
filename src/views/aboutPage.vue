<template>
    <div>
        <h1>关于</h1>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted,onMounted } from 'vue';

onMounted(() => {
    console.log('aboutPage mounted');
});
onUnmounted(() => {
    console.log('aboutPage unmounted');
});
</script>

<style scoped>

</style>