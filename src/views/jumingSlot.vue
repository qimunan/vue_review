<template>
    <div>
        <p>具名插槽</p>
        <header v-if="$slots.header" class="x">
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
        <div>
            <slot :text="msg" :count="1"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const msg = 'hello world'
</script>

<style scoped>
.x{
    background-color: red;
}
</style>