<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="margin: 20px 0">
    <div>
        <el-button plain round>Plain</el-button>
        <el-button type="success" plain round>Classic</el-button>
        <el-button type="info" plain round>Rustic</el-button>
        <el-button type="warning" plain round>Maverick</el-button>
    </div>
    <div>
        <el-button type="primary" plain round>Modern Minimalist</el-button>
        <el-button type="warning" plain round>Maverick</el-button>
        <el-button type="danger" plain round>Retro</el-button>
    </div>
    <div>
        <el-button plain round>Plain</el-button>
        <el-button type="success" plain round>Classic</el-button>
    </div>
</div>


  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-button.is-round {
    border-radius: 80px !important;     
    height: 160px !important;   
    width: 160px !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
