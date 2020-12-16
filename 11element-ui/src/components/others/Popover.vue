<template>
  <div>
    <h2>弹出框</h2>
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">hover 激活</el-button>
      <!-- 对于触发 Popover 的元素，写法：使用 slot="reference" 的具名插槽 -->
    </el-popover>

    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容">
      <el-button slot="reference">click 激活</el-button>
    </el-popover>

    <el-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容">
    </el-popover>
    <el-button v-popover:popover>focus 激活</el-button>

    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible">
      <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
    </el-popover>

  </div>
</template>

<script>
  export default {
    name: "Popover",
    data() {
      return {
        visible: false
      };
    }
  }
</script>

<style scoped>

</style>