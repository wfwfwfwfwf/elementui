<template>
  <el-container>
    <el-header>header</el-header>
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
<!--        <el-menu :default-openeds="openeds" :default-active="this.$route.path" router>-->
<!--          <el-submenu index="1">-->
<!--            <template slot="title"><i class="el-icon-message"></i>导航一</template>-->
<!--            <el-menu-item index="/nav3/page1">选项1</el-menu-item>-->
<!--            <el-menu-item index="/nav3/page2">选项2</el-menu-item>-->
<!--          </el-submenu>-->

<!--          <el-submenu index="2">-->
<!--            <template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
<!--            <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--            <el-submenu index="2-2">-->
<!--              <template slot="title">选项2</template>-->
<!--              <el-menu-item index="2-2-1">选项2-1</el-menu-item>-->
<!--            </el-submenu>-->
<!--          </el-submenu>-->

<!--          <el-submenu index="3">-->
<!--            <template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
<!--            <el-submenu index="3-1">-->
<!--              <template slot="title">选项1</template>-->
<!--              <el-menu-item index="3-1-1">选项1-1</el-menu-item>-->
<!--            </el-submenu>-->

<!--            <el-submenu index="3-2">-->
<!--              <template slot="title">选项2</template>-->
<!--              <el-menu-item index="3-2-1">选项2-1</el-menu-item>-->
<!--            </el-submenu>-->

<!--          </el-submenu>-->

<!--        </el-menu>-->
        <!--动态生成路由1-->
        <el-menu router>
          <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
            <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
            <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path">{{item2.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
        <!--  ------   -->
        <el-menu
          class="sidebar-menu"
          router
          :default-active="$route.path"
          :collapse-transition="false"
          :show-timeout="200"
          unique-opened
          background-color="#272a36"
          text-color="#e7e7e7"
          active-text-color="#ff6600">
          <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 100%;">
            <template v-for="(group,index) in  $router.options.routes">
              <el-submenu v-if="group.children && group.children.length > 0" :index="index+''">
                <template slot="title">
<!--                  <i :class="group.icon"></i>-->
                  <span slot="title">{{group.name}}</span>
                </template>
                <el-menu-item v-for="menu in group.children"  :index="menu.path">
<!--                  <i class="icon iconfont icon-pointer" style="vertical-align: baseline;"/>-->
                  {{menu.name}}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :key="group.id" :index="group.path">
<!--                <i :class="group.icon"></i>-->
                <span slot="title">{{group.name}}</span>
              </el-menu-item>
            </template>
          </el-scrollbar>
        </el-menu>

      </el-aside>

      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
<!--          <el-breadcrumb-item :to="{ path: '/' }">首页2</el-breadcrumb-item>-->
          <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>

        </el-breadcrumb>
      <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>


</template>

<script>
  export default {
    name: "Nav3",
    data() {
      return {
        //默认显示的路由
        active:'1-2',
        //默认打开的数组
        openeds:['1','3']
      }
    }
  }
</script>

<style scoped>
  .el-header {
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