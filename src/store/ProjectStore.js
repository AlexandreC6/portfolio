import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore',{
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Camilo Breakfast',
          description: "Premier projet déployé au sein du Wagon. Conception d’une application mobile créer en une semaine pour la présentation finale du bootcamp Le Wagon Lausanne. Du design au deploiment, pour pouvoir expérimenter tous les details de la mise en production d’une application",
          technologies: ['Ruby', 'Ruby on Rails','MySQL', 'HTML', 'CSS', 'Rest Api', 'Heroku'],
          link: 'https://camilo-breakfast.herokuapp.com/',
          date: 'Avril 2022',
          github: 'https://github.com/AlexandreC6/camilo-breakfast',
        },
        {
          id: 2,
          title: 'Find a coach',
          description: 'Conception du projet finale du cours Udemy, une application de recherche de coach. Mettre en pratique toutes les connaissances acquis durant le cour de Vue.js.',
          technologies: ['Vue Js', 'HTML', 'CSS', 'Firebase'],
          date: 'Juin 2022'
        },
        // {
        //   id: 3,
        //   title: 'Project Omega',
        //   description: '1 projets Javascript par jour, durant 20 jours.',
        // }
      ]
    }
  },
  getters: {
    projectTitle(){
      return this.projects;
    },
    // getUserById: (state) => {
    //   return (userId) => state.users.find((user) => user.id === userId)
    // },
  }
})
