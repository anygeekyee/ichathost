<template>
  <el-container>
    <el-header>
      <el-button @click="startRobot" round type="primary" :icon="Open">
        start
      </el-button>
      <el-button @click="stopRobot" round type="danger" :icon="TurnOff">
        stop
      </el-button>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<script lang="ts" setup>
// import {ref} from 'vue'
import { Open, TurnOff } from '@element-plus/icons-vue'
import { startBot, stopBot } from '@/api'
function startRobot() {
  console.log('start robot')
  startBot({}).then(() => {})
}
function stopRobot() {
  console.log('stop robot')
  stopBot({}).then(() => {})
}
</script>

<style lang="scss" scoped></style>
