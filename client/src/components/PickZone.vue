<template>
  <div class="hello">
  <div class="pickSpace">
   <div>
        <el-button plain round>Plain 简约</el-button>
        <el-button type="warning" plain round>Gorgeous 奢华</el-button>
    </div>
    <div>
        <el-button type="primary" plain round>Modern 现代</el-button>
        <el-button type="warning" plain round>Comic 漫画风</el-button>
        <el-button type="danger" plain round>Retro 复古</el-button>
    </div>
    <div>
        <el-button type="success" plain round>Classic 经典</el-button>
        <el-button class="plus" plain round> + </el-button>
   </div>
  </div>
  <div class="pickSpace">
<div style="margin: 80px 0 20px 0">
  <el-button plain>单色</el-button>
  <el-button type="info" plain>复古</el-button>
  <el-button plain>拟物</el-button>
  <el-button type="info" plain>时尚</el-button>
  <el-button plain>自然</el-button>
  <el-button type="info" plain>华丽</el-button>
</div>
<div style="margin: 20px 0">
  <el-button plain>水彩</el-button>
  <el-button type="info" plain>科技</el-button>
  <el-button plain>温馨</el-button>
  <el-button type="info" plain>混搭</el-button>
  <el-button plain>涂鸦</el-button>
  <el-button type="info" plain>古典</el-button>
</div>
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
.pickSpace {
  margin: 20px;
}
.plus {
  font-size: 20px;
}
h3 {
  margin: 20px 0 0;
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
    width: 140px;
    height: 140px;
    border-radius: 140px !important;  
}
</style>
