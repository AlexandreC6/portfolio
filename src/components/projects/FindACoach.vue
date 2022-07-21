<template>
  <div class="images">
    <img src="../../assets/find-a-coach/find-a-coach-menu.png">
    <img src="../../assets/find-a-coach/find-a-coach-details.png">
  </div>
</template>

<style scoped>
img {
  height: auto;
  width: 40.8984375vw;
  position: absolute;
  box-shadow: 13px 9px 12px 0px rgba(0,0,0,0.75);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

img:nth-child(1){
  transform: translate(-95%, -80%);
  animation: slide-up 1s;
  /* top: 46%;
  left: 34%; */
}

img:nth-child(2){
  /* top: 38%;
  left: 46%; */
  transform: translate(-30%, -20%);
  z-index: -1;
  animation: slide-down 1s;
}

@keyframes slide-down {
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(-30%, -20%);
  }
}

@keyframes slide-up {
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(-95%, -80%);
  }
}

</style>
