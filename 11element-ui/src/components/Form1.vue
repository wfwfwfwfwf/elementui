<template>
  <div>
    <hr>
    <h1>form1 单选框</h1>
    <!--  v-model绑定的是属性名radio(可以自定义),label绑定的是 v-model绑定的属性名的值(加上label才是一组)-->
    <el-radio v-model="sex" label="男" disabled @change="change">男</el-radio>
    <el-radio v-model="sex" label="女" @change="change">女</el-radio>
    <h2>{{sex}}</h2>
    <br>
    <br>
    <!--单选框组 :label类似value值  border加个边框 v-model='属性名'-->
    <el-radio-group v-model="hobby" text-color="#ffffff" @change="change2" >
      <el-radio :label="3" border>吃饭</el-radio>
      <el-radio :label="6">睡觉</el-radio>
      <el-radio :label="9">看电影</el-radio>
    </el-radio-group>
    <h2>{{hobby}}</h2>
    <!-- el-radio-button text-color="red" fill="#CCCCCC"  字体颜色与填充色-->
    <el-radio-group v-model="dadoudou" text-color="red" fill="#CCCCCC" @change="change3" >
      <!-- 单选按钮框组 el-radio-button-->
      <el-radio-button label="打豆豆1">打豆豆</el-radio-button>
      <el-radio-button label="打豆豆2">打豆豆2</el-radio-button>
      <el-radio-button label="打豆豆3">打豆豆3</el-radio-button>
    </el-radio-group>
    <h2>{{dadoudou}}</h2>

  </div>


</template>

<script>
  export default {
    name: "Form1",
    data () {
      return {
        sex: '男',
        hobby:6,
        dadoudou:'打豆豆1'
      }
    },
    methods:{
      change(){
        //打印的是绑定的变量的值,也即是label的值
        // console.log(this.sex)
      },
      change2(){
        // console.log(this.hobby)
      },
      change3(){
        // console.log(this.dadoudou)
      }
    }
  }
</script>

<style scoped>

</style>