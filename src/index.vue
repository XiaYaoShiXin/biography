<template>
  <div id="app">
    <navigator></navigator>
    <center>
      <answer-browser></answer-browser>
      <Back-top :height="300 " :duration="500 "></Back-top>
    </center>
  </div>
</template>

<script>
import AnswerBrowser from './components/AnswerBrowser.vue';
import Navigator from './components/Navigator.vue';

export default {
  name: 'index',
  components:{
    "answer-browser":AnswerBrowser,
    "navigator":Navigator
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

center {
    position: relative;
    margin-top: 50px;
}
</style>
