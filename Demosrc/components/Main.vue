<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-header>Header</el-header>
    <el-container >
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router

                 :default-active="$route.path">
        <!--  <el-submenu  v-for="(item,index) in $router.options.routes" :index="index+''">
            <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
            <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path">{{item2.name}}</el-menu-item>
          </el-submenu>-->
          <template v-for="(item,index) in  $router.options.routes">
            <el-submenu v-if="item.children && item.children.length > 0" :index="index+''">
            <!--  特殊作用 <el-submenu v-if="item.children && item.children.length > 1" :index="index+''">-->
              <template slot="title">
                <!-- <i :class="item.icon"></i>-->
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item v-for="menu in item.children"  :index="menu.path">
                     <i class="icon iconfont icon-pointer" style="vertical-align: baseline;"/>
                {{menu.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else  :index="item.path">
              <!-- <i :class="item.icon"></i>-->
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>

      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
  </div>
</template>

<script>
  export default {
    name: "Main"
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
