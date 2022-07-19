<template>
  <div>
    <div>
      <h1>{{projects[projectID].title}}</h1>
      <p>{{projects[projectID].imageOne}}</p>
      <p>{{projects[projectID].imageTwo}}</p>
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
  methods: {
    getSrc(name){
      const images = require.context('../assets/', false, /\.jpg$/);
      // camilo-breakfast-home
      return images('./' + name + ".jpg")
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
<style>
img {
  width: 400px;
  height: auto;
}

</style>
