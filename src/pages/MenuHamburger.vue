<template>
  <div>
    <nav class="nav-menu" :class="{ active: isActive }">
      <a href="#">Home</a>
      <a href="#">About me</a>
      <a href="#">Projects</a>
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

<style scoped>
  /* Page nav */

  .nav-menu {
    z-index: 9;
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-bottom: 1px solid rgb(48, 48, 48);
    transform: translateY(-100%);
    transition: transform 0.3s cubic-bezier(0.73, 0.11, 0.67, 0.84);
  }

  .nav-menu.active {
    transform: translate(0);
  }

  .nav-menu a {
    font-family: sans-serif;
    color: #000;
    font-size: 20px;
    /* display: block; */
    margin: 10px 0;
    text-decoration: none;
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
