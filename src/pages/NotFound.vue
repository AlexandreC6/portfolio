<template>
  <div class="container">
    <h1>Erorr 404</h1>
    <iframe src="https://giphy.com/embed/MwWl4l21R3GvRd4lHx" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: 'Cinzel', sans-serif;
  font-size: 5rem;
  /* display: inline-flex;
  justify-content: center;
  align-items: center; */
}

.giphy-embed {
  width: auto;
  /* height: 200px; */
  min-height: 13.889vw;
  pointer-events: none;
}
</style>
