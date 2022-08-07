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
        <div class="line3">Frontend developer</div>
      </transition>
    </div>
    <base-arrow id="about-me">About me</base-arrow>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  methods: {
    beforeEnter(el){
      el.style.opacity = '0';
      el.style.transform = 'translateX(300px)';
    },
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
  line-height: 3.3rem;

}

.line1 {
  transform: translateX(-65px);
}

.line2 {
  transform: translateX(-178px);
  color: #0F4C81;
}

.line3{
  font-size: 2rem;
}

@media screen and (max-width: 1063px) {
  .title {
    line-height: 1.5rem;
    font-size: 2rem;
  }

  .line3 {
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 30%;
  }
}

@media screen and (max-width: 500px) {
  .title {
    /* font-size: 1rem; */
  }

  .line1 {
    position: absolute;
    top: 40%;
    left: 40%;
  }
  .line2 {
    position: absolute;
    top: 50%;
    left: 55%;
  }
  .line3 {
    font-size: .5rem;
    position: absolute;
    top: 55%;
    left: 1%;
  }
}
</style>
