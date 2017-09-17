<template>
  <div id="app">
        <home-header></home-header>
        <home-menu></home-menu>
        <home-browser></home-browser>
        <Back-top :height="300 " :duration="500 "></Back-top>
  </div>
</template>

<script>
import HomeHeader from  './components/HomeHeader.vue';
import HomeMenu   from  './components/HomeMenu.vue';
import HomeBrowser from './components/HomeBrowser.vue';


export default {
  name: 'home',
  components:{
    'home-header': HomeHeader,
    'home-menu'  : HomeMenu,
    'home-browser'  : HomeBrowser
  }
}
</script>

<style scoped>
#app {
    background-color: #eeeeee;
    padding-bottom: 20px;
    overflow-x: hidden;
}

.ivu-back-top {
    visibility: hidden;
    display: block !important;
    opacity: 0;
    transition: opacity 0.4s;
}

.ivu-back-top-show {
    visibility: visible;
    opacity: 100;
}
</style>