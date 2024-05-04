<template>
    <div>
        <srF :msg="x"></srF>
            <div>
                <slot name="a">1</slot>
            </div>
    </div>
</template>

<script setup lang="ts">
import srF from './srFat.vue'
import { ref } from 'vue'
const x = ref<string>('父传子')
</script>

<style scoped>

</style>