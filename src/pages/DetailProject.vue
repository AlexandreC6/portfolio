<template>
  <div>
    <div>
      <h1>{{store.projects[projectID].title}}</h1>
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
    }
  },
  computed: {
    projectID(){
      // Return the ID from the browser
      return this.$route.params.id - 1;
    },
    fullName(){
      return this.title;
    },
  }
}
</script>

<style>

</style>
