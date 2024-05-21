<template>
    <div>
        <!-- <el-input v-model="model"></el-input> -->
        <el-input v-model="value" @input="updata"></el-input>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    }
});
var value = props.modelValue
const emit = defineEmits(['update:modelValue']);
// const model = defineModel()
const updata = (val: string) => {
    value = val;
    emit('update:modelValue', val);
}
</script>

<style scoped>

</style>