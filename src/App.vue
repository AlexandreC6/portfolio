<template>
<the-header></the-header>
  <router-view>
  </router-view>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
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

</style>
