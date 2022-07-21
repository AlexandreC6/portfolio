<template>
  <div>
    <div class="page__image projectOne__imageOne">
    </div>
    <div class="page__image projectOne__imageTwo">
    </div>
    <div class="page__image projectOne__imageThree">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.page__image {
  transform: translate(-50%, -50%);
}

.projectOne__imageOne,
.projectOne__imageTwo,
.projectOne__imageThree {
  height: 41vw;
  width: 20vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 50%;
  left: 50%;

}

.projectOne__imageOne {
  background-image: url(../../assets/camilo-breafast/camilo-breakfast-home.jpg);
  transform: translate(-50%, -50%);
  animation: imageOne-apparation 1.8s;
}

.projectOne__imageTwo{
  background-image: url(../../assets/camilo-breafast/camilo-breakfast-payment.jpg);
  z-index: -1;
  animation-delay: 2.8s;
  animation: rotationRight 2s;
  transform: translate(18%, -50%) rotate(17deg) scale(0.9);

}

.projectOne__imageThree{
  background-image: url(../../assets/camilo-breafast/camilo-breakfast-list-bakery.jpg);
  transform: translate(-118%, -50%) rotate(-17deg) scale(0.9);
  z-index: -1;
  animation-delay: 2.8s;
  animation: rotationLeft 2s;

}

@keyframes rotationLeft {
  from {
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-118%, -50%) rotate(-17deg) scale(0.9);
    opacity: 1;
  }
}

@keyframes rotationRight {
  from {
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  to {
    transform: translate(18%, -50%) rotate(17deg) scale(0.9);
    opacity: 1;
  }
}

@keyframes imageOne-apparation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
