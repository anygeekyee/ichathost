<template>
  <div class="bottom">
    <div class="left-bottom">
      <div class="header">
        <h1>线上热门内容</h1>
        <span>查看更多</span>
      </div>
      <div class="option">
        <p>文本</p>
        <p>图文</p>
        <p>视频</p>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          :default-sort="{ prop: 'date', order: 'descending' }"
          style="width: 100%"
        >
          <el-table-column type="index" label="排名" width="80" />
          <el-table-column prop="tittle" label="内容标题" width="180" />
          <el-table-column prop="hits" label="点击量" />
          <el-table-column
            prop="increase"
            label="日涨量"
            sortable
            width="180"
          />
        </el-table>
      </div>
    </div>
    <div class="center-bottom">
      <div class="header">
        <h1>内容类别占比</h1>
      </div>
    </div>
    <div class="right-bottom">3</div>
  </div>
</template>

<script setup lang="ts">
import type { TableColumnCtx } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style scoped lang="scss">
.bottom {
  display: flex;

  .left-bottom {
    flex: 4;
    margin-left: 20px;
    .header {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 20px;
        font-weight: 700;
      }
      span {
        color: blue;
      }
    }
    .option {
      display: flex;
      width: 150px;
      margin-top: 10px;
      background-color: #f2f3f8;
      p {
        flex: 1;
      }
    }
  }
  .center-bottom {
    margin-left: 20px;
    flex: 4;
    .header {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
  .right-bottom {
    margin-left: 20px;
    width: 300px;
  }
}
</style>
