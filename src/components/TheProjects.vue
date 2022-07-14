<template>
  <div class="my-projects">
    <h1>Projects</h1>
    <ul v-for="project in projects" :key="project.id">
      <li>
        <span class="index">({{project.id}})</span>
        <router-link :to="{path: '/project/' + project.id}" :id="project.id" :title="project.title"><span class="title">{{ project.title }}</span></router-link>
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
      ],
      message: 'Hello World from Projects'
    }
  },
  provide(){
    return{
      projects: this.projects
    }
  }

}
</script>

<style scoped lang="scss">
.my-projects {
  border: 1px solid yellow;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Cinzel', 'Helvitica, sans-serif';
    font-size: 4rem;
    text-transform: uppercase;
    align-self: center;
    margin: 2vw 0;
  }

  ul {
    width: 82.34vw;
    height: 100%;
    margin: 0 8.92vw;
    display: flex;
    justify-content: left;
    list-style: none;

    border-top: 2px solid #000;
    position: relative;

    li {
      height: 100%;
      font-family: 'Cinzel', 'Helvitica, sans-serif';
      list-style: none;
      font-size: 64px;
      font-weight: 700;
      text-transform: uppercase;
    }

  }
    ul:nth-child(4){
      border-bottom: 2px solid #000;
    }
}

.title {
  color: #000;
  letter-spacing: 0.2em;
  display: inline-block;
  // border: 1px solid green;
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);
}

.index {
  color: #0F4C81;
  padding-right: 1rem;
  font-size: 18px;
  letter-spacing: 0.1em;
  position: absolute;
  top: 10%;
}
</style>
