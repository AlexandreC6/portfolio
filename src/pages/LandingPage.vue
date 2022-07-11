<template>
  <div>
    <the-homepage></the-homepage>
    <about-me></about-me>
    <the-projects></the-projects>
  </div>
</template>

<script>
import TheHomepage from'@/components/TheHomepage.vue';
import AboutMe from '@/components/AboutMe.vue'
import TheProjects from '@/components/TheProjects.vue'

export default {
  components: {
    TheHomepage,
    AboutMe,
    TheProjects
  }
}
</script>

<style>
</style>
