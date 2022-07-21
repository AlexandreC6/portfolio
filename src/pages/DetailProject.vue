<template>
  <div>
    <div class="page-picture">
      <camilo-breakfast v-if="projectID === 0"></camilo-breakfast>
      <find-a-coach v-if="projectID === 1"></find-a-coach>
    </div>
    <div class="page-details">
      <h1>{{projects[projectID].title}}</h1>
      <p>{{array_description}}</p>
      <div class="container">
        <div class="box">
          <section v-for="sentence in splitSentence(projectID)" :key="sentence.id">
            <p>{{sentence[0]}}</p>
            <span v-if="sentence[1]">
              <p>{{sentence[1]}}</p>
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
            <base-button><a href="#">Github</a></base-button>
            <base-button><a href="#">Link</a></base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/store/ProjectStore";
import CamiloBreakfast from '../components/projects/CamiloBreakfast.vue';
import FindACoach from '../components/projects/FindACoach.vue'

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
    FindACoach
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
  }
}
</script>
<style scoped lang="scss">
.page-picture {
  height: 100vh;
  width: 100%;
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
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;

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



</style>
