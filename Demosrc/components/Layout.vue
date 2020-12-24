<template>
<div>
<!--
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header>Header</el-header>
    &lt;!&ndash;header之后再套el-container&ndash;&gt;
    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
            <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
            <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path">{{item2.name}}</el-menu-item>
          </el-submenu>
&lt;!&ndash;          <el-menu-item index="/pageOne">page1</el-menu-item>&ndash;&gt;
        </el-menu>

      </el-aside>


      <el-main>

        <router-view></router-view>
      </el-main>

    </el-container>

  </el-container>-->
<router-view></router-view>
</div>

</template>

<script>
  export default {
    name: "Layout"
  }
</script>

<style scoped>
  .el-header{
    /*el-xxx居然 当成类名处理...★★★*/
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /*line-height: 200px;*/
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }

</style>