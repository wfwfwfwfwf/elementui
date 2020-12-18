<template>
  <div>
    <h2>nav studying</h2>
       <!-- <el-menu :default-active="this.$route.path" class="el-menu-demo"  router mode="horizontal"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{item.navItem}}
          </el-menu-item>
        </el-menu>
        -->
      <el-row class="tac">
        <el-col :span="8">
          <h4>default</h4>
          <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo" router
                   active-text-color="#ffd04b">
            <el-menu-item-group>
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                {{item.navItem}}
              </el-menu-item>
            </el-menu-item-group>

          </el-menu>
        </el-col>
        <!--注意位置-->
        <router-view></router-view>
      </el-row>


  </div>

</template>

<script>
  export default {
    name: "Nav",
    data(){
      return{
        navList:[
          {name:'/nav/findProject',navItem:'发现'},
          {name:'/nav/admin',navItem:'管理员'},
          {name:'/nav/home',navItem:'家'},
          {name:'/nav/profile',navItem:'文档'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>