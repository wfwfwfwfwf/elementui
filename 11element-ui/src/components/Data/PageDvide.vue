<template>

  <div>
    <h2>分页基础</h2>
<!--
      设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。
      prev表示上一页，next为下一页，pager表示页码列表，total,共多少条数据
      除此以外还提供了jumper和total，size和特殊的布局符号->，
      ->后的元素会靠右显示，jumper表示跳页元素，total表示总条目数，size用于设置每页显示的页码数量
-->
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
<!--
     page-count:属性可以设置最大页码按钮数
     page-size:每页显示多少条数据
     total:总共多少条数据
     page:total/page-size 得出多少页
     background:背景颜色
-->
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        layout="total, prev, pager, next"
        :pager-count="11"
        :page-size="20"
        :total="1000"
         background>
      </el-pagination>
      <hr>
      <div class="block">
        <span class="demonstration">显示总数</span>
        <!--:current-page.sync默认显示第几页-->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000">
        </el-pagination>
        <hr>
        <div class="block">
          <span class="demonstration">调整每页显示条数</span>
<!--
      :page-sizes="[100, 200, 300, 400] 每页多少条数据 可选的
      sizes:左侧页码显示框
-->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="200"
            layout="sizes,total, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <hr>
        <div class="block">
          <span class="demonstration">jumper:直接前往</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
        <hr>
        <div class="block">
          <span class="demonstration">完整功能</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="200"
            layout="total, sizes, prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "PageDvide",
    methods: {
      //页码数量改变时触发
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<style scoped>

</style>