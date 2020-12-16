<template>
  <div>
    <h2>slideSwitch</h2>

    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="开启"
      inactive-text="关闭" @change="change">
    </el-switch>
  </div>
</template>

<script>
  export default {
    name: "SwitchSlide",
    data(){
      return{
        value:true
      }
    },
    methods:{
      change(){
        console.log(this.value)
      }
    }

  }

</script>

<style scoped>

</style>