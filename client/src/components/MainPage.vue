<template>
  <div class="hello">
    <p style="font-size: 30px">Initiate your fashion from future</p>
    <div style="margin: 20px 0">
    <PickZone v-loading="loading" catagories="['hello']"/>
</div>


  </div>
</template>

<script>
import PickZone from './PickZone.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    PickZone
  },
  data() {
    return{
      loading: true
    }
  },
  mounted() {
    setTimeout(()=>{this.loading = false},2000)
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
</style>
