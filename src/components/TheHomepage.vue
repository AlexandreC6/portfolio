<template>
<div class="body">
  <d class="title">
    <p class="line1">The portfolio of</p>
    <p class="line2">Alexandre Camilo</p>
    <p class="line3">Fullstack developer</p>
  </d>
  <base-arrow>About me</base-arrow>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.body{
  height: 100vh;
  width: 100%;
}

.title{
  font-family: 'Cinzel', sans-serif;
  font-weight: 400;
  font-size: 4.125rem;

}

.line1{
  position: absolute;
  top: 20.926vw;
  left: 25.860vw;
}

.line2{
  position: absolute;
  top: 25.225vw;
  left: 15.741vw;
  color: #0F4C81;
}

.line3{
  position: absolute;
  top: 30.185vw;
  left: 43.519vw;
  font-size: 2.75rem;
}
</style>
