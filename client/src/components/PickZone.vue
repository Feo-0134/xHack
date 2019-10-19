<template>
  <div class="hello">
   <div>
        <el-button plain round>Plain</el-button>
        <el-button type="warning" plain round>Maverick</el-button>
    </div>
    <div>
        <el-button type="primary" plain round>Modern</el-button>
        <el-button type="warning" plain round>Maverick</el-button>
        <el-button type="danger" plain round>Retro</el-button>
    </div>
    <div>
        <el-button plain round>Plain</el-button>
        <el-button type="success" plain round>Classic</el-button>
   </div>
  </div>
</template>

<script>
export default {
  name: 'PickZone',
  props: {
    catagories:[]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.el-button.is-round {
    width: 120px;
    height: 120px;
    border-radius: 120px !important;  
}
</style>
