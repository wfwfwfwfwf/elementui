<template>
  <div>
    <hr>
    <h2>form3 Input的使用</h2>
    <!--   clearable 属性即可得到一个可清空的输入框 所有input都需要v-model 不然不给输入★★★-->
    <el-input type="text" v-model="input" placeholder="maxlength:10" maxlength="10" minlength="5"  clearable></el-input>
    <!-- 密码框-->
    <el-input  v-model="inputs" placeholder="请输入密码" show-password></el-input>
    <br>
    <!--
    可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，
    也可以通过 slot 来放置图标。
    -->
    <h2>icon输入框</h2>
    <div class="demo-input-suffix">
      属性方式：
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <el-input placeholder="请选择日期" v-model="input3"><i slot="suffix" class="el-input__icon el-icon-date"></i></el-input>
      <el-input placeholder="请输入内容" v-model="input4"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    </div>
    <h2>textarea省略</h2>
    <hr>

    <h2>复合型输入框</h2>
    <div>
      <el-input placeholder="请输入内容" v-model="input5">
        <!--   用一个插槽     -->
        <template slot="prepend">Http://</template>
      </el-input>
    </div>

    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input6">
        <template slot="append">.com</template>
      </el-input>
    </div>


    <div>

        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option v-for="item in options"
                     :value="item.value"
                     :label="item.label"
                     :key="item.value"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>


    </div>

  </div>
</template>

<script>
  export default {
    name: "Form3",
    data() {
      return {
        inputs:'',
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        select: '请选择'
      }
    }
  }
</script>

<style scoped>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>