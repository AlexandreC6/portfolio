<template>
  <div>
      <p>{{titleProject}}</p>
  </div>
</template>

<script>
export default {
  inject:['projects'],
  data(){
    return {
      fullProject: this.projects
    }
  }
}
</script>

<style>

</style>
