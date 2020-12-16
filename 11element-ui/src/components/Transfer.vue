<template>
  <div>
    <div>
      <h2>穿梭框</h2>
    </div>
    <div class="transfer">
      <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入城市拼音"
        v-model="value"
        :data="data">
      </el-transfer>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Transfer",
      data() {
        const generateData = _ => {
          const data = [];
          const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
          const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
          cities.forEach((city, index) => {
            data.push({
              // key 为数据的唯一性标识，label 为显示文本，disabled 表示该项数据是否禁止转移。
              label: city,
              key: index,
              pinyin: pinyin[index]
            });
          });
          return data;
        };
        return {
          data: generateData(),
          // 目标列表中的数据项会同步到绑
          // 定至 v-model 的变量，值为数据项的 key 所组成的数组
          value: [1,2],
          //自定义搜索方法
          filterMethod(query, item) {
            // query就是关键字，item就是每个数据项，我们关键字搜索的是根据其显示的文本搜索，
            // 所以取的是item的pinyin属性,也可以直接按照label值的搜索
            return item.pinyin.indexOf(query) > -1;
          }
        };
      }
  }
</script>

<style scoped>
.el-transfer{
  text-align: left;

}
.transfer{
    position: relative;
    left:30%
}
</style>

