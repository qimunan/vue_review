<template>
    <div>
        <el-text class="mx-1" type="success">{{ msg }}</el-text>
        <el-button @click="x">弹窗demo</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const msg = ref('模版语法')
const x = () => {
    ElMessageBox.confirm(
        'proxy will permanently delete the file. Continue?',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(() => {
            ElMessage({
                type: 'success',
                message: 'Delete completed',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled',
            })
        })
}
</script>

<style scoped></style>