<template>
<div class="body" id="home">
  <d class="title">
    <div class="line1">The portfolio of</div>
    <div class="line2">Alexandre Camilo</div>
    <div class="line3">Fullstack developer</div>
  </d>
  <base-arrow id="about-me">About me</base-arrow>
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
  height: 100%;
  width: 100%;
  font-family: 'Cinzel', sans-serif;
  font-weight: 400;
  font-size: 4.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 53px;

}

.line1 {
  transform: translateX(-65px);
}

.line2 {
  transform: translateX(-178px);
  color: #0F4C81;
}

.line3{
  transform: translateX(186px);
  font-size: 2.75rem;
}
</style>
