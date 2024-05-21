<template>
  <el-input v-model="billInput" style="width: 240px" placeholder="点击加号输入可输入多个运单号">
    <!-- 插槽尾部图标 -->
    <template #suffix>
      <el-icon @click="openBathDialog" class="plusicon">
        <Plus />
      </el-icon>
    </template>
  </el-input>
  <el-button @click="toSubmit">提交</el-button>
  <!-- 弹出框 -->
  <el-dialog v-model="batchVisible" title="批量查询" center>
    <el-input type="textarea" v-model="textarea" :autosize="{ minRows: 6, maxRows: 10 }"></el-input>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="doString">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const billInput = ref('')
const textarea = ref('')
const batchVisible = ref(false)
const openBathDialog = () => {
  batchVisible.value = true
  // 把逗号替换成换行
  textarea.value = billInput.value.replace(/,/g, '\n')
}
// 换行替换成逗号
const doString = () => {
  billInput.value = textarea.value.replace(/\n/g, ',')
  batchVisible.value = false
  // 并把最后一个订单号后面的逗号去掉或者最后没有订单号的所有换行去掉
  billInput.value = billInput.value.replace(/,$/, '')
}

const cancel = () => {
  billInput.value = ''
  textarea.value = ''
  batchVisible.value = false
}

const toSubmit = () => {
  console.log(billInput.value)
  // 提交时根据逗号分割成数组，并把空数组去掉
  const arr = billInput.value.split(',').filter((item) => item)
  console.log(arr)
}

watch(() => billInput.value, (val) => {
  console.log(val)
  textarea.value = val
})
</script>
<style>
.plusicon {
  cursor: pointer;
}
</style>
