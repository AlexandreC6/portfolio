<template>
  <div>
    <nav class="nav-menu" :class="{ active: isActive }">
      <div class="left">
        <p class="contact">Contact</p>
        <p class="email">alex.camilo6@hotmail.ch</p>
      </div>
      <span class="line-between"></span>
      <div class="right">
      <a href="/#home" @click="toggleNav">Home</a>
      <a href="/#about-me" @click="toggleNav">About me</a>
      <a href="/#project" @click="toggleNav">Projects</a>
      </div>
    </nav>
    <button
      type="button"
      arial-label="toggle curtain navigation"
      class="nav-toggler"
      @click="toggleNav"
      :class="{ active: isActive }"
    >
      <span class="line-menu l1"></span>
      <span class="line-menu l2"></span>
      <span class="line-menu l3"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },

}
</script>

<style scoped lang="scss">
  /* Page nav */

  .nav-menu {
    z-index: 9;
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    background: #FBF4EC;
    border-bottom: 1px solid rgb(48, 48, 48);
    transform: translateY(-100%);
    transition: transform 0.3s cubic-bezier(0.73, 0.11, 0.67, 0.84);
  }

  .nav-menu.active {
    transform: translate(0);
  }

      .line-between {
        position: absolute;
        display: block;
        height: 100%;
        width: 3px;
        background: #000;
      }

    .left {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .contact {
        font-family: 'Cinzel', sans-serif;
        text-decoration: none;
        color: #000;
        font-weight: 700;
        font-size: 3.96vw;
        text-transform: uppercase;
      }

      .email {
        font-family: 'Cinzel', sans-serif;
        font-weight: 400;
        font-size: 1vw;
        color: #0F4C81;
        text-transform: uppercase;
        padding-top: 10px;
      }
    }

  .right {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      font-family: 'Cinzel', sans-serif;
      text-decoration: none;
      color: #000;
      font-weight: 700;
      font-size: 3.96vw;
      padding-bottom: 192px;
      text-transform: uppercase;
    }
  }

/* Button toggle menu */
.nav-toggler {
  position: fixed;
  z-index: 10;
  top: 2.579vw;
  right: 9.788vw;
  height: 50px;
  width: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
}

.line-menu {
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background: #000;
  transition: transform 0.3s ease-out, opacity 0.1s ease-out;
}

.l1 {
  transform: translateY(-10px);
}

.l3 {
  transform: translateY(10px);
}

.nav-toggler.active .l1 {
  transform: translateY(0) rotate(135deg);
}

.nav-toggler.active .l2 {
  opacity: 0;
}

.nav-toggler.active .l3 {
  transform: translateY(0) rotate(-135deg);
}

</style>
