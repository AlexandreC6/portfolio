<template>
  <div class="my-projects" id="project">
    <h1>Projects{{store.doubleCounter}}</h1>
    <ul v-for="project in projects" :key="project.id">
      <li>
        <span class="index">({{project.id}})</span>
        <router-link :to="{path: '/project/' + project.id}">
          <span class="title">{{ project.title }}</span>
        </router-link>
      </li>
    </ul>
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
      getUserById: store.getUserById,
      isHover: false,
    }
  },
  methods:{
    toggleHover(){
      this.isHover = !this.isHover;
    }
  }

}
</script>

<style scoped lang="scss">
.blue{
  color: green;
}

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

  &:hover {
    background: #f0f0f0;
  }
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
