<template>
  <div id="page-texture">
    <the-header></the-header>
    <router-view>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script >
import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Lato:wght@300;400;700;900&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  background: #FBF4EC;
}

#page-texture {
  height: 100%;
  z-index: -1;
  &::after {
    animation: grain 8s steps(10) infinite;
    background: url('./assets/grain-texture.png');
    content: "";
    height: 300%;
    left: -50%;
    opacity: 0.2;
    position: fixed;
    top: -100%;
    width: 300%;
  pointer-events: none;

  }
}

@keyframes grain {
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 35%) }
  90% { transform:translate(-10%, 10%) }
}
</style>
