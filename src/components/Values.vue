<template>
  <div class="row">
    <div class="col s4">
      <div class="card-panel white">
        <img v-scroll-reveal.reset src="../assets/Icons/coding.svg">
        <span v-scroll-reveal.reset class="card-title">Clean & Efficient Code</span>
        <div v-scroll-reveal.reset class="card-content">
          <p>Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets</p>
        </div>
      </div>
    </div>
    <div class="col s4">
      <div class="card-panel white">
        <img v-scroll-reveal.reset src="../assets/Icons/security.svg">
        <span v-scroll-reveal.reset class="card-title">Data Security</span>
        <div v-scroll-reveal.reset class="card-content">
          <p>Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets</p>
        </div>
      </div>
    </div>
    <div class="col s4">
      <div class="card-panel white">
        <img v-scroll-reveal.reset src="../assets/Icons/development.svg">
        <span v-scroll-reveal.reset id="title" class="card-title">Dynamic & Scalable</span>
        <div v-scroll-reveal.reset class="card-content">
          <p>Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>

  .card-panel {
    min-width: 240px;;
  }
  .card-title {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    padding: 1em;
  }
  .card-content {
    font-size: 12px;
  }

  .card-panel img {
    height: 300px;
    width: auto;
    margin: 0 auto;
    display: flex;
  }
  
</style>
