<template>
	<div class="navbar-fixed">
    <nav>
			<div class="nav-wrapper">
        <a href="#top" v-smooth-scroll="{ duration: 900 }" class="brand-logo"><img src="../assets/Icons/logo-white.svg"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a href="#top" v-smooth-scroll="{ duration: 900 }"><img id="up-arrow"></a></li>
          <li><a href="#top" v-smooth-scroll="{ duration: 900 }"><img id="about-me-icon">Home</a></li>
          <li><a href="#about" v-smooth-scroll="{ duration: 900 }"><img id="about-me-icon">About</a></li>
          <li><a href="#values" v-smooth-scroll="{ duration: 900 }"><img id="value-icon">Values</a></li>
          <li><a href="#contact" v-smooth-scroll="{ duration: 900 }"><img id="contact-icon">Contact</a></li>
        </ul>
			</div>
    </nav>
	</div>
</template>

<script>
import vueSmoothScroll from "vue-smooth-scroll";
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.nav-wrapper {
	background: #2a3a4a;
}

.brand-logo {
	width: 40px;
	margin: 10px;
}
</style>