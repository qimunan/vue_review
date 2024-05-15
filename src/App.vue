<template>
  <el-form ref="queryParamsRef" :model="queryParams" label-width="80px">
    <el-row>
      <el-col :span="6">
        <el-form-item label="编码" prop="code">
          <BatchInput v-model="queryParams.code"></BatchInput>
        </el-form-item>
      </el-col>
    </el-row>
    </el-form>
</template>

<script lang="ts" setup>
import BatchInput from '@/views/login/BatchInput.vue';
import { reactive, ref, onMounted, watch, toRefs } from 'vue';
import type { FormInstance } from 'element-plus';

const state = reactive({
  queryParams: <any>{
    code: '',
  },
  queryParamsRef: <FormInstance>{},
});

const {
  queryParams,
  queryParamsRef
} = toRefs(state);

</script>
