<template>
    <div>
        <el-input placeholder="请输入运单号(注意：输入单个单号可直接查询，批量查询需要点开文本框后面的加号)" v-model="model">
            <template #suffix>
                <el-icon class="plusicon" @click="openWindows">
                    <Plus />
                </el-icon>
            </template>
        </el-input>
        <el-dialog v-model="dialogVisible" title="请输入多个运单号" width="500">
            <el-input type="textarea" v-model="textareavalue" :autosize="{ minRows: 12, maxRows: 20 }"
                @change="textareaChange"></el-input>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="handleClose">取消</el-button>
                    <el-button type="primary" @click="handleConfirm">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const model = defineModel()

console.log(model);

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    }
});
const emit = defineEmits(['update:modelValue']);
console.log('props', props.modelValue, 'emit', emit);

const textareavalue = ref('');

const mailNum = ref('');
// const state = reactive({
//     billcode: '',
//     textInput: ''
// })
// 控制弹出框的显示隐藏的变量，初始设为false
const dialogVisible = ref(false)

// 点击加号打开弹窗，将dialogVisible设为true
const openWindows = () => {
    dialogVisible.value = true
    textareavalue.value = formatString(model.value as string);
};

/**
 * @param {String} val
 * @returns
 */
const textareaChange = (val: string) => {
    val = formatBreak(val);
    mailNum.value = val;
    model.value = val;
    console.log(val);
};
/**
 * 格式化换行符
 * @param {String} value
 * @returns {String}
 */
const formatBreak = (value: String) => {
    const parets = value.split('\n')
    return parets.join(',')
}

/**
 * 
 * @param {String}val 
 * @returns {String}
 */
const formatString = (val: String) => {
    var parts = val.split(/[,]+/);
    return parts.join('\n');
};

// 侦听器
// watch(() => state.billcode, (value) => {
//     state.billcode = formatBreak(value)
// })

/**
 * 格式化字符串
 * @param {String} val
 * @returns {String}
 */
// const formatString = (val: String) => {
//     var parts = val.split(/[ \n]+/);
//     return parts.join(',');
// };

/**
 *  直接关闭弹窗
 */
const handleClose = () => {
    dialogVisible.value = false
}

/**
 * 点击确认关闭弹窗
 */
const handleConfirm = () => {
    dialogVisible.value = false
    // const result = formatString(state.billcode);
    // console.log(typeof result);
    // model.value = mailNum.value;
    model.value = formatBreak(textareavalue.value);
    console.log('model', model.value);
    // emits('getDatas', result);
    // console.log('modelvalue', model.value);
    handleClose();
};
</script>

<style scoped lang="scss">
.plusicon {
    cursor: pointer;
}
</style>