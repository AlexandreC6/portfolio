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
          description: 'Conception du projet finale du cours Udemy, une application de recherche de coach. Mettre en pratique toutes les connaissances acquis durant le cour de Vue Js.',
          technologies: ['Vue Js', 'HTML', 'CSS', 'Firebase'],
          date: 'Juin 2022'
        },
        {
          id: 3,
          title: '20 projects JS',
          description: "Je me suis lancé comme défi de consolider mes connaissances en Javascript. J'ai choisi de faire un projet Javascript tous les jours pendant 20 jours. J'actualise cette page tous les jours !",
          technologies: ['HTML', 'Javascript', 'CSS'],
          date: ' Juillet 2022'
        }
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
