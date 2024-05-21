<template>
    <el-button plain @click="centerDialogVisible = true" type="primary">
      上传单号
    </el-button>
  
    <el-dialog v-model="centerDialogVisible" title="请上传单号" center>
      <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :on-progress="handleProgress"
        :on-success="handleSuccess"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          拖拽或 <em>点击上传</em>
        </div>
      </el-upload>
      <div v-if="uploading" class="progress-wrapper">
        <el-progress :percentage="progress" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { UploadFilled } from '@element-plus/icons-vue'
  
  const centerDialogVisible = ref(false)
  const uploading = ref(false)
  const progress = ref(0)
  
  const handleProgress = (event, file, fileList) => {
    uploading.value = true
    progress.value = Math.round((event.loaded / event.total) * 100)
  }
  
  const handleSuccess = (response, file, fileList) => {
    progress.value = 100
    setTimeout(() => {
      uploading.value = false
      progress.value = 0
    }, 1000)
  }
  </script>
  
  <style scoped>
  .progress-wrapper {
    margin-top: 20px;
  }
  </style>
  