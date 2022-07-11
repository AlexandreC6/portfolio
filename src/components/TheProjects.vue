<template>
  <div class="my-projects">
    <h1>Projects</h1>
    <ul v-for="project in projects" :key="project.id">
      <li>
        <span class="index">({{project.id}})</span>
        <span class="title">{{ project.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      projects:[
        {
          id: 1,
          title: 'Projet 1'
        },
        {
          id: 2,
          title: 'Project 2'
        },
        {
          id: 3,
          title: 'Project 3'
        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">
.my-projects {
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Cinzel', 'Helvitica, sans-serif';
    font-size: 4rem;
    text-transform: uppercase;
    align-self: center;
  }

  ul {
    width: 82.34vw;
    height:  80vh;
    margin-left: 8.92vh;
    margin-right: 8.92vh;
    display: flex;
    list-style: none;

    border-top: 2px solid #000;

    li {
      height: 100%;
      font-family: 'Cinzel', 'Helvitica, sans-serif';
      // color: #000;
      list-style: none;
      font-size: 64px;
      font-weight: 700;
      line-height: 57px;
      text-transform: uppercase;
    }

  }
    ul:nth-child(2){
        margin-top: 119px;
    }

    ul:nth-child(4){
      border-bottom: 2px solid #000;
    }
}

.title {
  color: #000;
  display: inline-block;
  transform: translate(0, 80px);
  letter-spacing: 0.2em;

}

.index {
  height: 100vh;
  color: #0F4C81;
  padding-right: 1rem;
  font-size: 18px;
  letter-spacing: 0.1em;
}
</style>
