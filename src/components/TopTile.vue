<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="background">

    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
  data () {
    return {
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang='less' scoped>
.background {
  // height: 100%;
  // width: 100%;
  // background-position: bottom;
  // background-repeat: no-repeat;
  // position: relative;
  // background-image: url(../../src/assets/Icons/ocean-top.svg);
}
</style>
