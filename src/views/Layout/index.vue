<template>
  <div class="common-layout">
    <Header />
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-main><Main /></el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from './Header/index.vue'
import Aside from './Aside/index.vue'
import Main from './Main/index.vue'
</script>

<style lang="scss" scoped>
.el-header {
  position: relative;
  width: 100%;
}
.common-layout {
  height: 100%;
}
</style>
