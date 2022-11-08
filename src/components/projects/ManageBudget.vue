<template>
  <div class="video">
    <video-budget-app />
  </div>
</template>

<script>
import VideoBudgetApp from '../ui/VideoBudgetApp.vue'

export default {
  components: {
    VideoBudgetApp
  },
}
</script>

<style scoped>
.video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
