<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/table">表格</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
// import tableData from './components/tableData.vue';

</script>

<style scoped>
.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  height: 100vh;
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
  height: 100vh;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
