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
.my-projects {
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  // background: greenyellow;

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
      font-size: 4.444vw;
      font-weight: 700;
      text-transform: uppercase;
    }

  }
    ul:last-child{
      border-bottom: 2px solid #000;
    }
}

.title {
  color: #000;
  letter-spacing: 0.2em;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);

  background: linear-gradient(to right, #000, #000 50%, rgb(161, 161, 161) 50%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 1s ease;

  &:hover {
    background-position: 0 100%;
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

@media screen and (max-width: 600px) {

  .my-projects {
    height: 60vh;

    ul {
      height: 100%;
    }
  }
}
</style>
