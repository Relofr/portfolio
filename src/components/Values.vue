<template>
<div v-scroll-reveal.reset="{ delay: 150 }">
  <!-- <ul>
    <li>
      <figure><img src="../assets/icons/coding.svg"><span>Clean & Readable</span></figure>
      <figcaption>Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets </figcaption>
    </li>
    <li>
      <figure><img src="../assets/icons/security.svg"><span>Security</span></figure>      
      <figcaption>Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets </figcaption>
    </li>
    <li>
      <figure><img src="../assets/icons/strategy.svg"><span>Dynamic & Reusable </span></figure>
      <figcaption>Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets </figcaption>
    </li>
    <li>
      <figure><img src="../assets/icons/development.svg"><span>Growth</span></figure>
      <figcaption>Bad Code Leaks Secrets Bad Code Leaks Secrets Bad Code Leaks Secrets </figcaption>
    </li>
  </ul> -->
  <ul>
    <li>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="../assets/icons/security.svg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Security
          <i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Security<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </li>

    <li>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="../assets/icons/security.svg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Security
          <i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Security<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </li>

    <li>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="../assets/icons/security.svg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Security
          <i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Security<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </li>
  </ul>
  
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
ul {
  text-align: center;
}
li {
  display: inline-block;
  padding: 1em;
}
.card {
  width: 100%;
  border-radius: 8px;
  padding: 3em;
}

.card .card-image img {
  width: 16rem;
}
// ul {
//   text-align: center;
// }
// li {
//   display: inline-block;
//   text-align: center;
//   padding: 3em;
// }
// img {

// }
// figure {
//   display: inline-block;
// }

// span {
//   font-size: 1.5em;
// }
</style>
