<template>
  <div class="about-me">
    <base-card></base-card>
    <base-logo></base-logo>
  </div>
</template>

<script>
export default {

}
</script>

<style scooped>
.about-me {
  height: 80vh;
  width: 100%;
}

@media screen and (max-width: 600px) {
  .about-me {
    height: 100%;
    margin-bottom: 2rem;
  }
}
</style>
