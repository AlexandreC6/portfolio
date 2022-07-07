<template>
  <div class="sticky">
    <div class="logo">
      alex.camilo
    </div>
    <menu-hamburger></menu-hamburger>
  </div>
  <div class="logo-socials">
    <ul>
      <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
    </ul>
  </div>
</template>

<script>
import MenuHamburger from '@/pages/MenuHamburger.vue';

export default {
  components: {
    MenuHamburger
  }

}
</script>

<style scoped lang="scss">
.sticky{
  position: sticky;
  top: 0;
}
.logo{
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 23px;
  color: #0F4C81;

  position: absolute;
  left: 8.862vw;
  top: 2.579vw;
  text-transform: uppercase;
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
