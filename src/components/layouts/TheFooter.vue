<template>
  <div class="footer">
    <div class="container">
      <div class="container__dev">
        <p>developed and designed by : </p>
        <p>Alexandre Camilo</p>
      </div>
      <div class="container__socials">
        <!-- <p>Socials</p> -->
        <p>Instagram</p>
        <p>LinkedIn</p>
        <p>Github</p>
      </div>
      <div class="container__btt">
        <p>Back to top</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.footer {
  /* height: 246px; */
  height: 20.15vh;
  width: 100%;
  padding-top: 50px;
  margin-top: 50px;
}

.container {
  /* background: rgba(0, 0, 255, 0.304); */
  height: 70%;
  border-top: 1px solid black;
  margin: 0 8.92vw;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  line-height: 1.5em;

  p {
    text-transform: uppercase;
    font-weight: 400;
  }
}

.container__socials {
  display: flex;
  justify-content: center;
  column-gap: 2rem;
}
</style>
