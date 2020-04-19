<template>
  <div id="app">
    <HeaderBox/>
    <router-view></router-view>
    <FooterBox/>

  </div>
  
</template>

<script>
import HeaderBox from './components/HeaderBox.vue'
import FooterBox from './components/FooterBox.vue'


export default {
  name: 'App',
  components: { 
    HeaderBox,
    FooterBox
  },
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .whiteTxt{
  color:#FFFFFF;
}
#app main a{
  color:#000000;
}
</style>
