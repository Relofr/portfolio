<template>
  <div>
    <div class="section-title">
      <span>Contact</span>
    </div>
    <div v-scroll-reveal.reset="{ delay: 150 }">
      <ul>
        <li tooltip="Github">
          <a href="https://github.com/Relofr" target="_blank"><img src="../assets/social-icons/github.svg"></a>
        </li>
        <li tooltip="LinkedIn">
          <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank"><img src="../assets/social-icons/linkedin.svg"></a>
        </li>
        <li tooltip="ky13h4tch@gmail.com">
          <a href="mailto:ky13h4tch@gmail.com"><img src="../assets/social-icons/email.svg"></a>
        </li>
        <li tooltip="(385)-223-5329">
          <img src="../assets/social-icons/phone.svg">
        </li>
      </ul>
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

<style lang='less' scoped>
ul {
  text-align: center;
  padding-top: 10rem;
}
li {
  display: inline-block;
  padding: 2.5rem;
}

img {
  width: 100%;
  width: 6em;
  height: auto;
  transition: .6s;
}

img:hover {
  transform: scale(1.2);
}

@media (max-width: 507px) {
  ul {
    padding-top: 0;
  }
}

[tooltip]{
  position:relative;
  display:inline-block;
}
[tooltip]::before {
    content: "";
    position: absolute;
    top: 18px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-width: 6px 6px 0px 6px;
    border-style: solid;
    border-color: #FFF transparent transparent transparent;
    z-index: 99;
    opacity: 0;
}

[tooltip]::after {
    content: attr(tooltip);
    position: absolute;
    left: 50%;
    top: 18px;
    transform: translateX(-50%) translateY(-100%);
    background: #FFF;
    text-align: center;
    color: #2a3a4a;
    font-size: 16px;
    border-radius: 120px;
    pointer-events: none;
    padding: .8em 1.2em;
    z-index: 99;
    opacity: 0;
    min-width: 10em;
}

[tooltip-position='top']::after{
  left:50%;
}

[tooltip]:hover::after,[tooltip]:hover::before {
  opacity: 1;
  transition: .5s;
}


.section-title {
    font-size: 33px;
    display: block;
    text-align: center;
    text-transform: uppercase;
  }
</style>
