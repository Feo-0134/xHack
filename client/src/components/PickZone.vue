<template>
  <div class="hello">
  <div v-if="!resultShow" class="pickSpace">
   <div>
        <el-button plain round>Plain 简约</el-button>
        <el-button type="warning" plain round>Gorgeous 奢华</el-button>
    </div>
    <div>
        <el-button type="primary" @click="getImg('mosaic')" plain round>Modern 现代</el-button>
        <el-button type="warning" @click="getImg('wave')" plain round>Classic 经典</el-button>
        <el-button type="danger" plain round>Retro 复古</el-button>
    </div>
    <div>
        <el-button type="success" @click="getImg('candy')" plain round>Comic 漫画风</el-button>
        <el-button class="plus" plain round> + </el-button>
   </div>
   <div class="pickSpace">
    <div style="margin: 80px 0 20px 0">
      <el-button @click="getImg('feathers')" plain>单色</el-button>
      <el-button @click="getImg('feathers')" type="info" plain>复古</el-button>
      <el-button @click="getImg('feathers')" plain>拟物</el-button>
      <el-button @click="getImg('feathers')" type="info" plain>时尚</el-button>
      <el-button @click="getImg('feathers')" plain>自然</el-button>
      <el-button @click="getImg('feathers')" type="info" plain>华丽</el-button>
    </div>
    <div style="margin: 20px 0">
      <el-button @click="getImg('denoised_starry')" plain>水彩</el-button>
      <el-button @click="getImg('denoised_starry')" type="info" plain>科技</el-button>
      <el-button @click="getImg('denoised_starry')" plain>温馨</el-button>
      <el-button @click="getImg('denoised_starry')" type="info" plain>混搭</el-button>
      <el-button @click="getImg('denoised_starry')" plain>涂鸦</el-button>
      <el-button @click="getImg('denoised_starry')" type="info" plain>古典</el-button>
    </div>
  </div>
  </div>
  <el-row v-if="resultShow" v-loading="loading" class="resultImg">
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../../imgStyle/generated/res.jpg" class="image">
      <div style="padding: 14px;">
        <span>INIT DESIGN</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">Operating button</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'PickZone',
  props: {
    catagories:[]
  },
  data() {
    return {
      attr1: null,
      attr2: null,
      resultShow: false,
      loading: true,
    }
  },
  computed: {
    imgPath() {
      return "../../../imgStyle/generated/res.jpg"
    }
  },  
  methods: {
    getImg(style) {
      new Promise(() => {
          var path = "http://localhost:3000/api/getPick/" + style
          this.$http.get(path)
          .then((response)=> {
          // console.log(response.data);
            this.attr1 = response.data
            this.resultShow = true
          })
          .catch((error) => {
              this.attr2 = error
              // console.log(error)
              return [];
          })
          setTimeout(()=>{this.loading = false},15000)
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resultImg {
}
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
