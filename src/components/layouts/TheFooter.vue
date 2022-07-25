<template>
  <div class="footer">
    <div class="container">
      <div class="container__dev">
        <p>developed and designed by : </p>
        <p>Alexandre Camilo</p>
      </div>
      <div class="container__socials">
        <!-- <p>Socials</p> -->
        <a href="https://twitter.com/alexc_fs" target="_blank"><p>twitter</p></a>
        <a href="https://www.linkedin.com/in/alexandre-camilo6/" target="_blank"><p>LinkedIn</p></a>
        <a href="https://github.com/AlexandreC6" target="_blank"><p>Github</p></a>
      </div>
      <div class="container__btt">
        <a href="/#home"><p>Back to top</p></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: #000;
}

.footer {
  height: 20.15vh;
  width: 100%;
  padding-top: 3.472vw;
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

@media screen and (max-width: 600px) {
  .footer {
    margin-top: 10px;
    height: 30vh;

  }

  .container {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }
}
</style>
