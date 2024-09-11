<!-- <script setup></script>

<template>
    <div class="P-home">
        <h1>Home Page</h1>
    </div>
</template>

<style scoped lang="stylus">
.P-home
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    background: linear-gradient(#f48c8d,#f4c58d)
    h1
        margin-top: 50px
        text-align: center
        color: #fff
        font-size: 40px
</style> -->
<template>
    <div id="app">
      <Header />
      <Poster />
    </div>
  </template>
  
  <script>
  import Header from '../components/header.vue'
  import Poster from '../components/home_content.vue'
  
  export default {
    name: 'App',
    components: {
      Header,
      Poster
    }
  }
  </script>
  
  <style>
  #app {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow: hidden;
  }
  </style>
  