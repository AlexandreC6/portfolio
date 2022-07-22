<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div>
        <menu-hamburger></menu-hamburger>
        <a href="/#home" class="logo">
          alex.camilo
        </a>
      <div class="logo-socials">
        <ul>
          <li><a href="https://github.com/AlexandreC6" target="_blank"><i class="fa-brands fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/alexandre-camilo6/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="https://twitter.com/alexc_fs" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import MenuHamburger from '@/pages/MenuHamburger.vue';
import gsap from 'gsap';


export default {
  components: {
    MenuHamburger
  },
  methods: {
    beforeEnter(el){
      el.style.opacity = '0';
    },
    enter(el){
      gsap.to(el, {
        duration: 2,
        opacity: 1,
      })
    }
  }

}
</script>

<style scoped lang="scss">
.logo{
  position: fixed;
  z-index: 8;
  top: 2.579vw;
  left: 8.862vw;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 23px;
  color: #0F4C81;
  // margin: 2.579vw 0 0 8.862vw;
  text-transform: uppercase;
  text-decoration: none;
}

.logo-socials {
  ul {
    display: flex;
    justify-content: center;
    gap: 2.579vw;
    position: absolute;
    top: 2.579vw;
    left: 44.444vw;

  }

  li {
    list-style: none;
    font-size: 30px;

    a{
      color: #000;
    }
  }
}

</style>
