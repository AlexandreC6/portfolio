<template>
  <div>
    <transtion name="rotate">
    <div class="page">
      <!-- <h1>{{projects[projectID].title}}</h1> -->
      <div class="page__image" :class="{
        projectOne__imageOne: projectID === 0,
        imageTwo: projectID === 1
      }">
      </div>
      <div class="page__image projectOne__imageTwo">
      </div>
      <div class="page__image projectOne__imageThree">
      </div>
    </div>
    </transtion>
    <div class="detail">

    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/store/ProjectStore";
export default {
  data(){
    const store = useProductStore()
    return {
      store,
      projects: store.projects,
    }
  },
  computed: {
    projectID(){
      // Return the ID from the browser
      return this.$route.params.id - 1;
    },
    image(){
      return this.store.projects[this.projectID].image;
    }
  }
}
</script>
<style scoped lang="scss">
.page {
  height: 100vh;
  width: 100%;
  border: 1px solid blue;
}

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

}

.projectOne__imageOne {
  // ../assets/camilo-breafast/camilo-breakfast-home.jpg
  background-image: url(../assets/camilo-breafast/camilo-breakfast-home.jpg);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
}

.projectOne__imageTwo{
  background-image: url(../assets/camilo-breafast/camilo-breakfast-payment.jpg);
  z-index: -1;
  // transform: rotate(17deg) scale(0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  animation: rotationRight 2s;
  transform: translate(18%, -50%) rotate(17deg) scale(0.9);

}

.projectOne__imageThree{
  background-image: url(../assets/camilo-breafast/camilo-breakfast-list-bakery.jpg);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-118%, -50%) rotate(-17deg) scale(0.9);
  // transform: rotate(-17deg) scale(0.8);
  // top: 16%;
  // left: 29%;
  z-index: -1;
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

//Image pour le deuxième projet

// .imageTwo {
//   width: 700px;
//   height: 700px;
//   border: 1px solid green;
//   // ../assets/camilo-breafast/camilo-breakfast-home.jpg
//   background-image: url(../assets/find-a-coach/find-a-coach-menu.png) ;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: contain;
// }

</style>
