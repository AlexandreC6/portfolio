<template>
  <div class="container">
    <div class="my-description">
      <p>
        I’m Alexandre Camilo. I’m a frontend developer with
        <spand class="blue-tech">React.Js</spand> and
        <span class="blue-tech">Vue.Js</span>.
      </p>
      <br />
      <p>
        I love building high-performance web applications and a great user interface with different technologies.
      </p>
      <br />
      <p>
        I love learning recent technologies and always improve my skills by doing new projets !
      </p>
    </div>
    <div class="picture">
      <img src="../../assets/profile-picture_removebg.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      speech: "",
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 68.45vw;
  margin: 0 15vw;
  // width: 68.452vw;
  // height: 13.558vw;
  display: grid;
  grid-template-columns: 1fr 187px;
  grid-template-rows: 1fr;
  grid-column-gap: 8.59vw;
  grid-row-gap: 0px;
}

.my-description {
  // width: 47.619vw;
  // height: 100%;
  grid-area: 1 / 1 / 2 / 2;

  p {
    font-size: 1.4em;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 27px;

    .blue-tech {
      color: #0f4c81;
      font-weight: 600;
    }
  }
}
.picture {
  grid-area: 1 / 2 / 2 / 3;
  img {
    // height: 185px;
    height: 11.56rem;
  }
}

@media screen and (max-width: 600px) {
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
  }

  .my-description {
    margin-top: 1rem;
  }
}
</style>
