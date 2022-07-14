<template>
  <div>
    <div>
      <h1>{{fullName}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props:['id', 'title'],
  computed: {
    fullName(){
      return this.title;
    }
  }
}
</script>

<style>

</style>
