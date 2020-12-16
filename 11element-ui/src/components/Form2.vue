<template>
  <div>
    <hr>
    <h1>form2 多选框</h1>
    <el-checkbox v-model="checked" disabled>备选项</el-checkbox>
    <el-checkbox v-model="checked2">备选项2</el-checkbox>
    <!--多选框组 只有在组里才使用label或者绑定的对象; min&max 左闭右开 设置组里最多最少选几个-->
    <el-checkbox-group v-model="checkList"  :min="1" :max="4">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" border></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <br>
    <h2>这里有个全选案例</h2>

    <div>
      <el-checkbox :indeterminate="isIndeterminate"
                   v-model="checkAll"
                   @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox-button v-for="city in cities"
                              :label="city"
                              :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    name: "Form2",
    data() {
      return {
        checked: true,
        checked2: true,
        //这个数组里面的元素是什么就有几个被选中
        checkList: ['选中且禁用','复选框 C'],
        checkedCities: ['上海','北京'],
        checkAll:false,
        cities:cityOptions,
        isIndeterminate:true
      }
    },
    methods:{
      handleCheckAllChange(val){
        // console.log(val)  true || false
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value){
        // 每个框的点击状态
        // value 本身是true||false,value.length是选中的个数
        let checkedCount = value.length;
       /* if (checkedCount === this.cities.length){
              this.checkAll = true
        }*/
        this.checkAll = checkedCount === this.cities.length;
        // - 是在什么情况下显示的！
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>

<style scoped>

</style>