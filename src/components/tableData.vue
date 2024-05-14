<template>
    <div>
        <el-scrollbar style="height: calc(98vh - 74px);">
            <el-table :data="pagedTableData" style="width:100%">
                <el-table-column prop="orderNum" label="单号"  />
                <el-table-column prop="scanTime" label="扫描时间"  />
                <el-table-column prop="scanBase" label="扫描网点"  />
                <el-table-column prop="scanType" label="扫描类型"  />
                <el-table-column prop="trackRecord" label="跟踪记录" />
                <el-table-column prop="togatherTask" label="协作任务" />
                <el-table-column prop="intercept" label="拦截日制" />
            </el-table>
        </el-scrollbar>
        <el-config-provider :locale="locale">
            <el-pagination class="pagination-bottom" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 50]"
                :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" />
        </el-config-provider>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import zhCn from "element-plus/es/locale/lang/zh-cn"

const locale = zhCn

const item = reactive({
    orderNum: '770012085635455',
    scanTime: '2024-05-13 14:37:08',
    scanBase: '广东广州广汕服务点',
    scanType: '问题件',
    trackRecord: '【广东广州广汕服务点】进行问题件扫描，扫描类型【拒收】，原因【客户拒收】，扫描员【郭文志ZS】',
    togatherTask: '任务类型：催件|催派 客户催收 申通客服001(江西新余公司) 2024-05-14 14:56:31',
    intercept: '拦截类型：xx 拦截原因：xxx '
})

const tableData = ref(Array.from({ length: 10000 }).fill(item))
const currentPage = ref(1)
const pageSize = ref(10)

const pagedTableData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return tableData.value.slice(start, end)
})

function handleSizeChange(val: any) {
    pageSize.value = val
}

function handleCurrentChange(val: any) {
    currentPage.value = val
}
</script>

<style scoped>
.pagination-bottom {
    margin-top: 20px;
}
</style>
