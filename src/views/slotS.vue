<template>
    <div>
        <p>插槽</p>
        <MySlot><span style="color: red;">我是组件上的内容</span></MySlot>
        <MySlot></MySlot>
        <juming>
            <template #header>
                <div>我是具名插槽头部</div>
            </template>
            <template #footer>
                <div>我是具名插槽底部</div>
            </template>
            <!-- <template #default> -->
                <!-- 默认的隐式插槽 -->
                <div>我是没有具名插槽的插槽</div>
            <!-- </template> -->
        </juming>
        <juming v-slot="x">
            {{ x.text }}--{{ x.count }}
        </juming>
    </div>
</template>

<script setup lang="ts">
import MySlot from './slotOut.vue'
import juming from './jumingSlot.vue'
</script>

<style scoped></style>