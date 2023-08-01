<template>
  <div>分析页</div>
</template>

<script lang="ts" setup>
import { getBot } from '@/api'

const getBotInfo = async () => {
  const { data } = await getBot()
  console.log(data)
}

getBotInfo()
</script>

<style lang="scss" scoped></style>
