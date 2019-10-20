<template>
<el-container class="hello">
  <el-header class="appTitle">
  <!-- <div class="titleBox Box1">
    <img class="iconImg" alt="Vue logo" src="../assets/logo2.png">
  </div>
  <div class="titleBox">
    <p>{{ msg }}</p>
  </div> -->
  </el-header>
  <el-main class = "mainContent">
    <MainPage v-if="selectType" msg = "Welcome to Your Supreme" />
    <!-- <el-button class="titleBox" @click="uploadFile" >Upload</el-button>
    <el-button class="titleBox" @click="downloadFile">
    <el-link :underline="false" href="javascript:;">Download</el-link>
    </el-button> -->
    <el-upload v-if="uploadSlot"
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :auto-upload="false">
      <el-button class="titleBox" slot="trigger"  plain>Select</el-button>
      <el-button class="titleBox" style="margin-left: 10px;"  @click="submitUpload" plain>Upload</el-button>
      <!-- <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div> -->
    </el-upload>
  </el-main>
  <el-footer>a piece of blur code</el-footer>
</el-container>
</template>

<script>
import MainPage from './MainPage.vue'
  export default {
    name: 'UploadPage',
    components: {
        MainPage
    },
    props: {
      msg: String
    },
    data() {
      return {
        infoshow: false,
        fileList: [],
        uploadSlot: true,
        selectType: false
      };
    },
    methods: {
      // templateFunc() {
      //   this.$http.get(this.downloadApiPath)
      //   .then((response)=> {
      //     console.log(response)
      //   })
      //   .catch((error)=>{
      //       console.log(error)
      //   })
      // },
      async submitUpload() {
        this.$refs.upload.submit();
        try {
          await this.$http.post(this.uploadApiPath, this.uploadApiPayload)
        }catch(e){
          // console.log(e)
        }
        this.uploadSlot = false
        this.selectType = true
      },
      downloadFile() {
        window.location.href = this.downloadApiPath
      },

      uploadFile() {
          // this.$http.get(this.apiPath)
          this.$http.post(this.uploadApiPath, this.uploadApiPayload)
      },
    },
    computed:{
      downloadApiPath() {
        return (
          'http://127.0.0.1:3000/public/temp.zip'
        );
      },
      uploadApiPath() {
        return (
          'http://127.0.0.1:3000/api/upload'
        );
      },
      uploadApiPayload() {
        return {
          files:{
            file:{
              path:'/Users/junchengzhu/project/xHack/imgStyle/img/test.jpg',
              name:'test.jpg'
            }
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainContent {
    min-height: 350px;
    margin-top: 100px;
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
  .appTitle {
    text-align: left !important;
  }
  .iconImg {
    height: 50px;
    width: 50px !important;
  }
  .titleBox {
    height: 50px;
    display: inline-block;
    width: 200px;
    margin: 10px;
  }
  .Box1 {
    width: 70px !important;
  }
</style>
