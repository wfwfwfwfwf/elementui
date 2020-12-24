<template>
  <div id="app">
<!--  <Layout></Layout>-->
    <Main></Main>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import Main from "./components/Main";

export default {
  name: 'App',
  components: {
    Layout,
    Main
  }
}
</script>

<style>
#app{
  font-size: 20px;
  text-align: center;
}
</style>
