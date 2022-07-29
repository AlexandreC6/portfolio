<template>
  <div>
    <div class="page-picture"  v-if="projectID !== 2">
      <camilo-breakfast v-if="projectID === 0"></camilo-breakfast>
      <find-a-coach v-if="projectID === 1"></find-a-coach>
      <section class="scroll"><scroll-down></scroll-down></section>
    </div>
    <div class="page-details" :class="{'project-javascript': projectID === 2 }">
      <h1>{{projects[projectID].title}}</h1>
      <p>{{array_description}}</p>
      <div class="container">
        <div class="box">
          <section v-for="sentence in splitSentence(projectID)" :key="sentence.id">
            <span v-for="phrase in sentence" :key="phrase.id">
              <p>{{phrase}}</p>
            </span>
          </section>
        </div>
        <div class="right-side">
          <div class="date">
            <h4>Date</h4>
            <p>{{projects[projectID].date}}</p>
          </div>
          <div class="techno">
            <h4>Technologies</h4>
            <div v-for="techno in projects[projectID].technologies" :key="techno.id">
              <p>{{techno}}</p>
            </div>
          </div>
          <div class="button">
            <base-button v-if="projects[projectID].github != null">
              <a :href="projects[projectID].github" target="_blank">Github</a>
            </base-button>
            <base-button v-if="projects[projectID].link != null">
              <a :href="projects[projectID].link" target="_blank">Link</a>
            </base-button>
          </div>
        </div>
      </div>
    </div>
    <project-js v-if="projectID === 2"></project-js>
  </div>
</template>

<script>
import { useProductStore } from "@/store/ProjectStore";
import CamiloBreakfast from '../components/projects/CamiloBreakfast.vue';
import FindACoach from '../components/projects/FindACoach.vue'
import ProjectJs from '../components/projects/ProjectJs.vue'

export default {
  data(){
    const store = useProductStore()
    return {
      store,
      projects: store.projects,
      arrayOfDescription: []
    }
  },
  components: {
    CamiloBreakfast,
    FindACoach,
    ProjectJs
  },
  computed: {
    splitDescription(){
      return this.arrayOfDescription;
    },
    projectID(){
      // Return the ID from the browser
      return this.$route.params.id - 1;
    },
  },
  methods: {
    splitSentence(id){
      const array = this.projects[id].description.split('.')
      this.arrayOfDescription.push(array);
      return this.arrayOfDescription
    }
  },
  mounted () {
    // https://renatello.com/vue-js-scroll-top/
    window.scrollTo(0, 0)
  }
}
</script>
<style scoped lang="scss">
.page-picture {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1rem;

  .scroll {
    position: absolute;
    transform: translate(-50%,);
    bottom: 1rem;
    left: 50%;
  }
}

.page-details {
  height: 80vh;
  width: 100%;
  padding: 0 9.788vw 0 8.10546875vw;

  h1 {
    font-family: 'Cinzel', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 0.2rem;
    padding-bottom: 1rem;
  }
}

.project-javascript {
  h1 {
    padding-top: 90px;
  }
}

.container {
  // background: rgba(0, 128, 0, 0.278);
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .box {
    height: 349px;
    width: 409px;
    box-shadow: 13px 9px 12px 0px rgba(0,0,0,0.75);

    p {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.375rem;
      padding: 1rem;
    }
  }

  .right-side {
    height: 349px;
    width: 200px;

    .date {
      h4 {
      font-weight: 700;
      font-size: 1.5rem;
      padding-bottom: 6px;
      text-transform: uppercase;
      border-bottom: 1px solid black;
      }
      p {
        padding: 1rem 0;
        font-weight: 500;
      }
    }
    .techno {
      h4 {
        font-weight: 700;
        font-size: 1.5rem;
        padding-bottom: 6px;
        text-transform: uppercase;
        border-bottom: 1px solid black;
      }
      p {
        font-weight: 500;
        line-height: 22px;
      }
    }
    .button {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;

      a{
        text-decoration: none;
        color: #000;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .page-picture {
  height: 80vh;
  }

  .container {
    height: 90%;
    flex-direction: column;
    justify-content: space-between;

    .box {
      transform: scale(0.8);
    }
  }

  .right-side {
    height: 100%;
    width: 80vw !important;
  }

  .page-details {
    height: 100vh;

    h1 {
      padding-top: 60px;
      font-size: 1.7rem;
    }
  }
}


</style>
