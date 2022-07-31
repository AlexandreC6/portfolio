<template>
  <div class="container-grid" id="top">
    <!-- <p>{{store.projectJs[0].title}}</p> -->
    <span v-for="projectJs in storeProject" :key="projectJs.id">
      <base-project
        :title="projectJs.title"
        :image="projectJs.background"
        :link="projectJs.link"
        :description="projectJs.description"
        :github="projectJs.github"
      >
      </base-project>
    </span>
  </div>
</template>

<script>
import { useProductStore } from "@/store/ProjectStore";
import BaseProject from "../ui/BaseProject.vue"

export default {
  data(){
    const store = useProductStore()
    return {
      store,
    }
  },
  components: {
    BaseProject
  },
  computed: {
    storeProject(){
      return this.store.projectJs;
    },
  }

}
</script>

<style scoped>
.container-grid {
  /* height: 80vh; */
  /* height: 500px; */
  height: 16.622vw;
  max-width: 100vw;
  padding: 0 9.788vw;
  flex-wrap: wrap;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: .5rem;
  grid-row-gap: .5rem;
}

.container-grid > base-project {
  border: 1px solid red;
}

@media screen and (max-width: 500px) {
  .container-grid {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 1600px) {
  .container-grid {
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
}

@media screen and (max-width: 1100px) {
  .container-grid {
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
}
</style>
