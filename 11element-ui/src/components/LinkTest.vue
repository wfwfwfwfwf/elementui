<template>
  <div>
    <hr>
    <h1>linkTest</h1>
    <!--el-link :underline有无下划线 -->
    <div>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" :underline="false">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
    <div>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LinkTest"
  }
</script>

<style scoped>

</style>