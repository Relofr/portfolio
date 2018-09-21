<template>
  <div id="app">

    <section id="top">
      <top-tile />
    </section>

    <section id="about">
      <about-me />
    </section>

    <section id="values">
      <values />
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

export default {
  name: 'App',
  components: {
    TopTile, AboutMe, Values, Contact
  }
}
</script>

<style lang='scss'>

body {
  font-family: 'Montserrat';
  margin: 0;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  background: linear-gradient(to bottom, #0575b2, #034163, #02273c);
}

section {
  padding: 7em;
  height: calc(100vh);
  scroll-snap-align: start;

  &:nth-of-type(1) {
    padding: 0;
    height: calc(100vh);
    // background: blue;
  }

  &:nth-of-type(2) {
    // background: green;
  }

  &:nth-of-type(3) {
    // background: #FFF;
  }

  &:nth-of-type(4) {
    background-image: url(./assets/images/ocean-floor2.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: bottom;
  }
}
</style>
