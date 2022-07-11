<template>
  <div class="container">
    <div class="contain">
      <p>I’m Alexandre Camilo.
      I’m a web developer with <spand class="blue-tech">Ruby on Rails</spand> and <span class="blue-tech">VueJs</span>.</p>
      <br>
      <p>i’m passionate about everything that has to do with digital design.</p>
    </div>
    <div class="picture">
      <img src="../../assets/profile-picture.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      speech: ''
    }
  },
}
</script>


<style scoped lang="scss">
.container {
  width: 100%;
  margin: 0 15vw;
  // width: 68.452vw;
  // height: 13.558vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 0px;
}

.contain {
  // width: 47.619vw;
  // height: 100%;
  grid-area: 1 / 1 / 2 / 2;

  p {
    font-size: 2em;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 27px;

    .blue-tech {
      color: #0F4C81;
    }
  }
}
.picture {
  grid-area: 1 / 2 / 2 / 3;
    img {
      height: 185px;
    }
}
</style>
