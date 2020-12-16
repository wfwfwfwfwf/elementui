<template>
  <div>
    <h2>table基础</h2>

    <router-link to="/table/table2" tag="el-button">table2</router-link>
    <router-link to="/table/table3" tag="el-button">table3</router-link>
    <router-link to="/table/table4" tag="el-button">table4</router-link>
    <router-link to="/table/table5" tag="el-button">table5</router-link>
    <router-link to="/table/table6" tag="el-button">table6</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Table"
  }
</script>

<style scoped>

</style>