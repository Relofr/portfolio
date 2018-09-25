<template>
  <div id="app">

    <section id="top">
      <top-tile />
    </section>

    <section id="about">
      <about-me />
    </section>

    <section id="values">
      <!-- <values /> -->
      <div class="section-title">
        <span>My Values</span>
      </div>
    </section>

    <section id="contact">
      <contact />
    </section>
    
  </div>
</template>

<script>
import TopTile from './components/TopTile';
import AboutMe from './components/AboutMe';
import Values from './components/Values';
import Contact from './components/Contact';
import vueSmoothScroll from "vue-smooth-scroll";
import TweenMax from "gsap/TweenMax";

export default {
  name: 'App',
  components: {
    TopTile, AboutMe, Values, Contact
  }
}
</script>

<style lang='scss'>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  // scroll-snap-type: y mandatory;
  // overflow-y: scroll;
  overflow-x: hidden;
}

section {
  padding: 7em;
  height: calc(100vh);
  // scroll-snap-align: start;

  &:nth-of-type(1) {
    padding: 0;
    height: calc(100vh);
    background-image: url(./assets/images/ocean-top.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: bottom;
    margin: -2px;
  }

  &:nth-of-type(2) {
    background: linear-gradient(to bottom, #1b98dc, #0575b2);
  }

  &:nth-of-type(3) {
    background: linear-gradient(to bottom, #0575b2, #034163, #02273c);
  }

  &:nth-of-type(4) {
    background-image: url(./assets/images/ocean-floor.svg), linear-gradient(to bottom, #02273c, #010d14);
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: bottom;
  }
}


.section-title {
    font-size: 33px;
    display: block;
    text-align: center;
    text-transform: uppercase;
    color: #FFF;
  }

</style>
