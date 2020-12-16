<template>
  <div>
    <h2>table2 表格基础</h2>
      <!--
          el-table元素中注入data对象数组后，
          在el-table-column中用prop属性来对应对象中的键名即可填入数据，
          用label:表格的列名
          stripe 条纹
          border 带边框
          Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。
          可以添加一个索引列
      -->
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="address"
        label="住址">
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Table",
    data() {
      return {
        tableData: [{
          name: '王小虎',
          sex:'男',
          age:20,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex:'男',
          age:20,
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          name: '王小虎',
          sex:'男',
          age:20,
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          name: '王小虎',
          sex:'男',
          age:20,
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped>

</style>