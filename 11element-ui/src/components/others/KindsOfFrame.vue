<template>
  <div>
    <h2>各种框</h2>
    <router-link to="/kindsOfFrame/dialog" tag="el-button">对话框</router-link>
    <router-link to="/kindsOfFrame/tooltip" tag="el-button">文字提示</router-link>
    <router-link to="/kindsOfFrame/popover" tag="el-button">弹出框</router-link>
    <router-link to="/kindsOfFrame/popconfirm" tag="el-button">气泡确认</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Card"
  }
</script>

<style scoped>

</style>