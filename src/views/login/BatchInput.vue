<template>
    <el-input v-model="inputValue" placeholder="请输入运单号" @input="updateVal">
        <template #suffix>
            <el-icon class="batch-icon" @click="handleBatchInput">
                <Plus />
            </el-icon>
        </template>
    </el-input>
    <BatchInputDialog v-model:visible="batchInputVisible" @getDatas="getBatchDatas" :data="inputValue"></BatchInputDialog>
</template>
<script lang="ts" setup>
import { reactive, toRefs, watch } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import BatchInputDialog from './BatchInputDialog.vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue', 'input']);

const updateVal = value => {
    emit('update:modelValue', value);
    emit('input', value);
};

const state = reactive({
    inputValue: '',
    batchInputVisible: false,
});

const { inputValue, batchInputVisible } = toRefs(state);
watch(
    () => props.modelValue,
    value => {
        state.inputValue = value;
    },
    { immediate: true }
);
const handleBatchInput = () => {
    state.batchInputVisible = true;
};
const getBatchDatas = value => {
    if (value) {
        updateVal(value);
    }
};
</script>

<style scoped lang="scss">
.batch-icon {
	cursor: pointer;
}
</style>
