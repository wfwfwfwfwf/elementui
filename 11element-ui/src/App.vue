<template>
  <div id="app">
    <h1>element-UI studying</h1>
    <!-- 不传参的时候可以写name 也可以写path  (对象形式) -->
    <router-link :to="{name:'button'}" tag="el-button">buttonTest</router-link>
    <router-link :to="{path:'/linkTest'}" tag="el-button">LinkTest</router-link>
    <router-link to="/layout" tag="el-button">layout</router-link>
    <router-link to="/container" tag="el-button">container</router-link>
    <router-link to="/containerIns" tag="el-button">containerIns</router-link>
    <br><br>
    <router-link to="/form1" tag="el-button" >form表单1</router-link>
    <router-link to="/form2" tag="el-button">form表单2</router-link>
    <router-link to="/form3" tag="el-button">form表单3</router-link>

    <router-link to="/selectOption" tag="el-button">selectOption</router-link>
    <router-link to="/switchSlide" tag="el-button">slideSwitch</router-link>
    <router-link to="/date1" tag="el-button">date1</router-link>
    <router-link to="/date2" tag="el-button">date2</router-link>
    <br>
    <div style="margin-top: 15px"></div>
    <el-button @click="TransferClick">transfer</el-button>
    <el-button @click="FormClick">formExp</el-button>
    <el-button @click="FormClick2">formExp2</el-button>

    <el-button @click="tableClick">table</el-button>
    <router-link to="/treeControl" tag="el-button">tree控件</router-link>
    <router-link to="/page" tag="el-button">page控件</router-link>

    <router-link to="/messages" tag="el-button">message控件</router-link>
    <div style="margin-top: 15px"></div>
    <router-link to="/messageBox" tag="el-button">messageBox控件</router-link>
    <router-link to="/notification" tag="el-button">notification控件</router-link>

    <router-link to="/nav1" tag="el-button">nav1</router-link>
    <router-link to="/nav2" tag="el-button">nav2</router-link>
    <router-link to="/tabs" tag="el-button">tabs</router-link>

    <router-link to="/kindsOfFrame" tag="el-button">kindsframe</router-link>
    <router-link to="/card" tag="el-button">card</router-link>
    <router-link to="/swiper1" tag="el-button">swiper1</router-link>
    <router-link to="/swiper2" tag="el-button">swiper2</router-link>


    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  methods:{
    TransferClick(){
      this.$router.push({
        path:'/transfer'
      })
    },

    FormClick(){
      this.$router.push('/formExample')
    },
    FormClick2(){
      this.$router.push('/formExample2')
    },

    tableClick(){
      this.$router.push('/table')
    }
  }

}
</script>

<style>
#app {
  font-size: 18px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
