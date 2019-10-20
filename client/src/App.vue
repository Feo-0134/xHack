<template>
  <div id="app">
    <img class="logoImg" alt="Vue logo" src="./assets/logo2.png">
    <UploadPage msg = "Welcome to Your Supreme"/>
  </div>
</template>

<script>
import UploadPage from './components/UploadPage.vue'


export default {
  name: 'app',
  components: {
    UploadPage,
  }
}
</script>

<style>
.logoImg {
  height: 200px;
  width: 200px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
