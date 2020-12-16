<template>
  <div>
    <h2>notice</h2>
    <el-button
      plain
      @click="open1">
      可自动关闭
    </el-button>

    <el-button
      plain
      @click="open2">
      不会自动关闭
    </el-button>

  </div>
</template>

<script>
  export default {
    name: "Messages",
    methods: {
      open1() {
        //this.$createElement :
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          type:'success',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案')
        });
      },

      open2() {
        //常用
        this.$notify({
          title: '提示',
          type:'info',
          message: '这是一条不会自动关闭的消息',
          //默认4.5s
          duration: 0
        });
      }
    }
  }
</script>

<style scoped>

</style>