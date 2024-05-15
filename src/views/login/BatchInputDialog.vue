<template>
    <el-dialog v-model="props.visible" top="10px" :title="props.title" width="450px" :before-close="handleClose">
        <el-form ref="queryParamsRef" :model="queryParams" label-width="80px">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="" prop="value">
                        <el-input v-model="queryParams.value" :autosize="{ minRows: 16 }" type="textarea" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleConfirm">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, toRefs, watch } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
        required: true,
    },
    title: {
        type: String,
        default: '请输入',
        required: false,
    },
    data: {
        type: String,
        default: '',
        required: false,
    },
});

const state = reactive({
    queryParams: <any>{
        value: '',
    },
});

// 把逗号分隔转换成空格换行
const formatBreak = value => {
    var parts = value.split(',');
    return parts.join('\n');
};

watch(
    () => props.data,
    value => {
        state.queryParams.value = formatBreak(value);
    },
    { immediate: true }
);

const { queryParams } = toRefs(state);

const emits = defineEmits<{
    (e: 'update:visible', value): void;
    (e: 'getDatas', value): void;
}>();
const handleClose = () => {
    emits('update:visible', false);
};

// 把空格转换成逗号分隔
const formatString = input => {
    var parts = input.split(/[ \n]+/);
    return parts.join(',');
};
const handleConfirm = () => {
    const result = formatString(state.queryParams.value);
    emits('getDatas', result);
    handleClose();
};
</script>

<style scoped lang="scss">
.selectioned {
    color: var(--el-color-primary);
}

.image-info-wrap {
    justify-content: center;
}

</style>
