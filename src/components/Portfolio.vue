<template>
  <div class="grid-container">
  <div id="top" class="header-container">
    <div id="background-wrap">
      <div class="x1">
        <div id="cloud1" class="cloud"></div>
      </div>

      <div class="x2">
        <div class="cloud"></div>
      </div>

      <div class="x3">
        <div class="cloud"></div>
      </div>

      <div class="x4">
        <div class="cloud"></div>
      </div>

      <div class="x5">
        <div class="cloud"></div>
      </div>
    </div>
    <div class="left-nav-container">
      <ul>
        <li><a href="#top" v-smooth-scroll="{ duration: 900 }"><img id="up-arrow" src="../assets/SVG/up-arrow.svg"></a></li>
        <li><a data-tool-tip="About Me" href="#about" v-smooth-scroll="{ duration: 900 }"><img id="about-me-icon" src="../assets/SVG/about-me-icon.svg"></a></li>
        <li><a data-tool-tip="My Values" href="#values" v-smooth-scroll="{ duration: 900 }"><img id="value-icon" src="../assets/SVG/value-icon.svg"></a></li>
        <li><a data-tool-tip="Contact" href="#contact" v-smooth-scroll="{ duration: 900 }"><img id="contact-icon" src="../assets/SVG/contact-icon.svg"></a></li>
      </ul>
    </div>
    <div class="top-text" data-splitting>
      <p>
        SOFTWARE DEVELOPMENT
      </p>
      <p>
        & GRAPHIC DESIGN
      </p>
    </div>
  </div>
  <div class="about-container">
    <div id="about"></div>
  	<span id="section-title">about me</span>
    <p id="about-me-text">In my free time, I enjoy graphic design, photography and playing video games. I've recently started studying programming, and have found myself integrating design into my work. I'm detail oriented and love learning new skills, taking on challenging tasks and solving problems.</p>
    <div class="about-icon-container">
      <div class="about-icon-item">
        <span>Vue.js</span>
        <img src="../assets/SVG/Vue.svg">
      </div>
      <div class="about-icon-item">
        <img src="../assets/SVG/Ruby.svg">
      </div>
      <div class="about-icon-item">
        <img src="../assets/SVG/github.svg">
      </div>  
      <div class="about-icon-item">
        <img src="../assets/SVG/cli.svg">
      </div>
      <div class="about-icon-item">
        <img src="../assets/SVG/ai.svg">
      </div>
      <div class="about-icon-item">
        <img src="../assets/SVG/htmlcssjs.svg">
      </div>
    </div>
  </div>
  <div class="values-container">
    <div id="values"></div>
  	<span id="section-title">my values</span>
  	<div class="values-icon-container">
    	<div class="values-icon-item">
        <img src="../assets/SVG/computer-no-background.svg">
        <span id="values-text">Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, </span>
      </div>
    	<div class="values-icon-item">
        <img src="../assets/SVG/clean-code-terminal.svg">
        <span id="values-text">Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, </span>
      </div>
    	<div class="values-icon-item">
        <img src="../assets/SVG/security-no-background.svg">
        <span id="values-text">Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, Bad code leaks secrets, </span>
      </div>
    </div>
  </div>
  <div class="contact-container">
    <div class="jelly-container">
  <div class="bubble-1"></div>
  <div class="bubble-2"></div>
  <div class="bubble-3"></div>
  <div class="bubble-4"></div>
  <div class="bubble-5"></div>
  <div class="bubble-6"></div>
  <div class="bubble-7"></div>
  <div class="bubble-8"></div>
  <div class="bubble-9"></div>
  <div class="bubble-10"></div>
</div>
    <div id="contact"></div>
  	<span id="section-title">contact</span>
  	<div class="contact-icon-container">
    	<div class="contact-icon-item"></div>
    	<div class="contact-icon-item"></div>
    	<div class="contact-icon-item"></div>
    </div>
  </div>
</div>
</template>

<script>
import Splitting from "splitting";
import vueSmoothScroll from "vue-smooth-scroll";
Splitting();
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
li a {
  color: black;
  font-size: 24px;
}
li a:hover {
  background: transparent;
}
.navbar-fixed nav {
  background-color: transparent;
}
nav {
  box-shadow: none !important;
}

.header-container {
  grid-area: header;
  background-color: transparent;
  background-image: url("../assets/SVG/ocean-top.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}

.about-container {
  grid-area: about;
  background-color: transparent;
  background: linear-gradient(to bottom, #1b98dc, #0575b2);
  background-size: 100%;
  background-repeat: no-repeat;
}
#about-me-text {
  font-size: 22px;
  margin: 0 auto;
  width: 40%;
  line-height: 33px;
  letter-spacing: 1px;
  text-align: left;
}
.values-container {
  grid-area: values;
  background-color: transparent;
  background: linear-gradient(to bottom, #0575b2, #034163, #02273c);
  background-size: 100%;
  background-repeat: no-repeat;
}
.contact-container {
  grid-area: contact;
  background-image: url("../assets/SVG/ocean-floor.svg"),
    linear-gradient(to bottom, #02273c, #010d14);
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: bottom;
}

.grid-container {
  min-height: 940px;
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "about about about about about about"
    "values values values values values values"
    "contact contact contact contact contact contact";
}

.grid-container > div {
  text-align: center;
  margin: -1px 0px 0px -1px;
}
.header-container {
  min-height: 940px;
}
.about-icon-container {
  min-height: 940px;
  display: grid;
  grid-template-columns: auto auto auto;
  align-content: center;
  justify-content: center;
}
.about-icon-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 245px;
  margin: 0px 55px 55px;
}
.values-icon-container {
  min-height: 940px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
}
.values-icon-item {
  display: flex;
  width: 245px;
  margin: 55px;
  flex-direction: column;
}
#values-text {
  display: block;
  margin-top: 45px;
  max-width: 500px;
  color: white;
  align-self: center;
  text-align: left;
}
.contact-icon-container {
  min-height: 880px;
  display: grid;
  grid-template-columns: auto auto auto;
}
.contact-icon-item {
  background-color: transparent;
  font-size: 30px;
  text-align: center;
}

.top-text {
  font-size: 2vw;
  line-height: 25px;
  letter-spacing: 5px;
  text-align: left;
  margin: 8% 16%;
  animation: fadeIn 2s top;
}

#about,
#values,
#contact {
  margin-bottom: 25px;
}

#section-title {
  color: #fff;
  font-size: 2.4em;
  text-transform: uppercase;
}

.left-nav-container {
  position: fixed;
  left: 0;
  top: 0;
}

.left-nav-container ul li {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#up-arrow,
#about-me-icon,
#value-icon,
#contact-icon {
  width: 30px;
  margin: 0px;
  display: flex;
  justify-content: center;
}

/* .left-nav-container img:hover {
  transform: scale(1.2);
}

a[data-tool-tip] {
  position: relative;
}

a[data-tool-tip]::after {
  content: attr(data-tool-tip);
  display: block;
  position: absolute;
  color: black;
  border-radius: 5px;
  font-size: 0.75em;
  top: 0.5px;
  left: 0;
  margin-left: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
  transform: scale(0);
  transition: transform ease-out 100ms, left ease-out 100ms;
}

a[data-tool-tip]:hover::after {
  transform: scale(1);
  left: 100%;
} */

.divider {
  margin-bottom: 50px;
}

#background-wrap {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
}

@-webkit-keyframes animateCloud {
  0% {
    margin-left: -1000px;
  }
  100% {
    margin-left: 100%;
  }
}

@-moz-keyframes animateCloud {
  0% {
    margin-left: -1000px;
  }
  100% {
    margin-left: 100%;
  }
}

@keyframes animateCloud {
  0% {
    margin-left: -1000px;
  }
  100% {
    margin-left: 100%;
  }
}

.x1 {
  -webkit-animation: animateCloud 35s linear infinite;
  -moz-animation: animateCloud 35s linear infinite;
  animation: animateCloud 35s linear infinite;

  -webkit-transform: scale(0.65);
  -moz-transform: scale(0.65);
  transform: scale(0.65);
}

.x2 {
  -webkit-animation: animateCloud 20s linear infinite;
  -moz-animation: animateCloud 20s linear infinite;
  animation: animateCloud 20s linear infinite;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x3 {
  -webkit-animation: animateCloud 30s linear infinite;
  -moz-animation: animateCloud 30s linear infinite;
  animation: animateCloud 30s linear infinite;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
}

.x4 {
  -webkit-animation: animateCloud 18s linear infinite;
  -moz-animation: animateCloud 18s linear infinite;
  animation: animateCloud 18s linear infinite;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x5 {
  -webkit-animation: animateCloud 25s linear infinite;
  -moz-animation: animateCloud 25s linear infinite;
  animation: animateCloud 25s linear infinite;

  -webkit-transform: scale(0.55);
  -moz-transform: scale(0.55);
  transform: scale(0.55);
}

.cloud {
  background: #c4c4c4;

  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  height: 120px;
  position: relative;
  width: 350px;
}

.cloud:after,
.cloud:before {
  background: #c4c4c4;
  content: "";
  position: absolute;
  z-index: -1;
}

.cloud:after {
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  height: 100px;
  left: 50px;
  top: -50px;
  width: 100px;
}

.cloud:before {
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;

  width: 180px;
  height: 180px;
  right: 50px;
  top: -90px;
}

.top-text.words .char{
  animation: slide-down 2s forwards;
  opacity: 0;
}
@keyframes slide-down {
  from {
    transform: translateY(125%);
    opacity: 0;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
