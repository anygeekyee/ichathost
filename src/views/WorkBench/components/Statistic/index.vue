<template>
  <el-row :gutter="8" class="">
    <StatisticItem tittle="线上总内容"></StatisticItem>
    <StatisticItem tittle="线上总内容"></StatisticItem>
    <StatisticItem tittle="日新增评论 "></StatisticItem>
    <StatisticItem tittle="较昨日新增"></StatisticItem>
  </el-row>
</template>

<script lang="ts">
import StatisticItem from './StatisticItem.vue'
export default {
  components: { StatisticItem },
}
</script>

<style lang="scss" scoped></style>
