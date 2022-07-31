import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore',{
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Camilo Breakfast',
          description: "Premier projet déployé au sein du Wagon. Conception d’une application mobile créee en une semaine pour la présentation finale du bootcamp Le Wagon Lausanne. Du design au deploiment, pour pouvoir expérimenter tous les details de la mise en production d’une application",
          technologies: ['Ruby', 'Ruby on Rails','MySQL', 'HTML', 'CSS', 'Rest Api', 'Heroku'],
          link: 'https://camilo-breakfast.herokuapp.com/',
          date: 'Avril 2022',
          github: 'https://github.com/AlexandreC6/camilo-breakfast',
        },
        {
          id: 2,
          title: 'Find a coach',
          description: 'Conception du projet final du cours Udemy, une application de recherche de coach. Mettre en pratique toutes les connaissances acquises durant le cour de Vue Js.',
          technologies: ['Vue Js', 'HTML', 'CSS', 'Firebase'],
          date: 'Juin 2022',
          github: 'https://github.com/AlexandreC6/find-a-coach'
        },
        {
          id: 3,
          title: '20 projects JS',
          description: "Je me suis lancé comme défi de consolider mes connaissances en Javascript. J'ai choisi de faire un projet Javascript tous les jours pendant 20 jours. J'actualise cette page tous les jours !",
          technologies: ['HTML', 'Javascript', 'CSS'],
          date: ' Juillet 2022'
        }
      ],
      projectJs : [
        {
          id: 1,
          title:"Calcul d'IMC",
          link: "https://calculateur-imc.netlify.app",
          background: "https://res.cloudinary.com/dguwsqu9j/image/upload/v1659023220/portfolio/projectJS/Calcul-IMC_ui18jn.png",
          description: "Le but de ce projet est de coder un calculateur d'IMC à partir des valeurs rentrées par un utilisateur dans les deux inputs."
        },
        {
          id: 2,
          title: "Quizz",
          link: "https://quizz-culture-generale.netlify.app",
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659023220/portfolio/projectJS/Quizz_qtqny6.png',
          description: 'Le but de ce projet est de coder un quizz qui affiche des messages et des couleurs différentes en fonction des résultats de ce dernier.'
        },
        {
          id: 3,
          title: 'Api Wikipédia',
          link: 'https://wiki-app6.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659025184/portfolio/projectJS/Api-Wiki-Reduit_zvdgav.png',
          description: "Le but de ce projet est de coder un système de recherche grâce à l'API de Wikipedia."
        },
        {
          id: 4,
          title: 'Météo App',
          link: 'https://meteo-app-js.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659262197/portfolio/projectJS/meteo-app_yfrg1r.png',
          description: "Ce projet va vous entraîner à utiliser une API, manipuler des données et adapter une interface avec ces dernières."
        },
        {
          id: 5,
          title: 'Générateur de cookies',
          link: 'https://generator-cookies.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659262324/portfolio/projectJS/generator-cookies_xuvoer.png',
          description: 'Le but de ce projet est de créer un générateur de Cookies'
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
