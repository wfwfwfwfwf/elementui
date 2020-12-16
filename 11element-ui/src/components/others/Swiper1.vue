<template>
  <div>
    <h2>轮播图1</h2>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" arrow="always">
        <el-carousel-item v-for="image in images">
          <img :src="image.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    data(){
      return{
        images:[
          {url:require('../../assets/1.jpg')},
          {url:require('../../assets/17921b343b86e10d89b3f6b2e1ca841b.jpg')},
          {url:require('../../assets/5d3881725db95a8dfdc0cced382e337b.jpg')},
          {url:require('../../assets/45eb46be9ea54ebb8978324eb35841a7.jpg')}
        ]
      }
    }

  }
</script>


<style scoped>
    .block{
      width: 500px;
      height: 300px;
    }
    div img{
    }
  .el-carousel__  item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>