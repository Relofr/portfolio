<template>
  <div v-scroll-reveal.reset class="contact-icons">
    <a href="https://github.com/Relofr" target="_blank"><span>Github</span></a>
    <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank"><span>LinkedIn</span></a>
    <a href="mailto:ky13h4tch@gmail.com"><span>ky13h4tch@gmail.com</span></a>
    <a><span>(385)223-5329</span></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.contact-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color:#fff;
  border-radius:4px;
  text-align:center;
  text-decoration:none;
  position: relative;
  display: inline-block;
  padding-top: 70px;
  margin:0 2px;
  -o-transition:all .5s;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
  -webkit-font-smoothing: antialiased;
  width: auto;
  height: 100px;
  margin: 3%;
}
a:hover {
  transform: scale(.96);
}

a span {
  color:#2a3a4a;
  position:absolute;
  bottom:0;
  left:-25px;
  right:-25px;
  padding:5px 7px;
  z-index:-1;
  font-size:14px;
  border-radius:2px;
  background:#fff;
  visibility:hidden;
  opacity:0;
  -o-transition:all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -moz-transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-size: 12px;
  font-weight: bold;
}

a span:before {
  content:'';
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
  position:absolute;
  bottom:-5px;
  left:40px;
}

a:hover span {
  bottom:50px;
  visibility:visible;
  opacity:1;
  transform: scale(1.5);
}

a:nth-of-type(1):before {
  content: url(../assets/social-icons/github.svg);
}
a:nth-of-type(2):before {
  content: url(../assets/social-icons/linkedin.svg);
}
a:nth-of-type(3):before {
  content: url(../assets/social-icons/email.svg);
}
a:nth-of-type(4):before {
  content: url(../assets/social-icons/phone.svg);
}


</style>
