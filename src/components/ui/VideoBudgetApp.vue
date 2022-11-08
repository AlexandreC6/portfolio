<template>
  <div class="video-player">
    <video class="video" ref="video" autoplay>
      <source src="../../assets/manage-budget/Budgets-app-react.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  computed: {
    videoElement() {
      return this.$refs.video;
    },
  },
};
</script>

<style scoped>
video {
  max-height: 500px;
}
@media  screen and (max-width: 600px) {
  video {
    height: 300px;
  }
}
</style>
