<template>
  <div class="app-content">
    <div class="top">
      <div class="left">
        <h1>👏 欢迎回来 , User</h1>
        <Statistic></Statistic>
        <LineCharts />
      </div>
      <div class="right">
        <Card />
      </div>
    </div>
    <div>
      <Bottom />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Statistic from './components/Statistic/index.vue'
import LineCharts from './components/LineCharts/index.vue'
import Card from './components/Card/index.vue'
import Bottom from './components/Bottom/index.vue'
</script>

<style lang="scss" scoped>
.app-content {
  .top {
    display: flex;
    .left {
      flex: 1;
      h1 {
        font-size: 30px;
      }
    }
    .right {
      width: 300px;
    }
  }
}
</style>
