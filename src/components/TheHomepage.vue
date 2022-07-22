<template>
  <div class="body" id="home">
    <div class="title">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="line1">The portfolio of</div>
      </transition>
      <transition appear @before-enter="nameBeforeEnter" @enter="nameEnter">
        <div class="line2">Alexandre Camilo</div>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="FSenter">
        <div class="line3">Fullstack developer</div>
      </transition>
    </div>
    <base-arrow id="about-me">About me</base-arrow>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  methods: {
    // where the animation will start from
    beforeEnter(el){
      el.style.opacity = '0';
      el.style.transform = 'translateX(300px)';
    },
    // where the animation will end up
    enter(el) {
      gsap.to(el, {
        duration: 2,
        x: -65,
        opacity: 1,
      })
    },
    nameBeforeEnter(el){
      el.style.opacity = '0';
      el.style.transform = "translateX(-300px)";
    },
    nameEnter(el){
      gsap.to(el, {
        duration: 2,
        x: -178,
        opacity: 1
      })
    },
    FSenter(el){
      gsap.to(el, {
        duration: 2,
        x: 186,
        opacity: 1
      })
    }
  }
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
