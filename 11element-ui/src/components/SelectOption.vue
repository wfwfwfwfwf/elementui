<template>
  <div>
    <h2>selectOption Studying</h2>
    <!--clearable仅适用于单选清空  filterable加上可搜索功能 默认情况下，Select 会找出所有label属性包含输入值的选项-->
    <el-select v-model="value" placeholder="基础单选" @blur="click" clearable filterable>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled">
      </el-option>
    </el-select>
    <br>
    <br>
    <el-select v-model="value1" multiple placeholder="基础多选">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <h3>※备选项显示的样子是可自定义</h3>
    <h3>分组显示</h3>

    <el-select v-model="value2" placeholder="请选择">
      <el-option-group
        v-for="group in optionss"
        :key="group.label"
        :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-option-group>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: "SelectOption",
    data() {
      return {
        //显示的是label的值 value值是必须要有的
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎',
          //disabled 禁用
          disabled:true
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1:'',
        value2:'',
        //对象数组,每个对象的label属性是分组的名字
        optionss: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        },
          {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
      }
    },
    methods:{
      click(){
        //v-model 绑定的是value的值
        // console.log(this.value)
      }
    }

  }

</script>

<style scoped>

</style>