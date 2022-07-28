<template>
  <div class="container-grid" id="top">
    <!-- <p>{{store.projectJs[0].title}}</p> -->
    <span v-for="projectJs in storeProject" :key="projectJs.id">
      <base-project
        :title="projectJs.title"
        :image="projectJs.background"
        :link="projectJs.link"
        :description="projectJs.description"
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
  height: 500px;
  width: 100%;
  padding: 100px 9.788vw;
  /* border: 1px solid blue; */

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
</style>
