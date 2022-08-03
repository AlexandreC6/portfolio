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
          description: "Le but de ce projet est de coder un calculateur d'IMC à partir des valeurs rentrées par un utilisateur dans les deux inputs.",
          github: 'https://github.com/AlexandreC6/IMC-app'
        },
        {
          id: 2,
          title: "Quizz",
          link: "https://quizz-culture-generale.netlify.app",
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659023220/portfolio/projectJS/Quizz_qtqny6.png',
          description: 'Le but de ce projet est de coder un quizz qui affiche des messages et des couleurs différentes en fonction des résultats de ce dernier.',
          github: 'https://github.com/AlexandreC6/Quizz-app'
        },
        {
          id: 3,
          title: 'Api Wikipédia',
          link: 'https://wiki-app6.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659025184/portfolio/projectJS/Api-Wiki-Reduit_zvdgav.png',
          description: "Le but de ce projet est de coder un système de recherche grâce à l'API de Wikipedia.",
          github: 'https://github.com/AlexandreC6/WikiApp'
        },
        {
          id: 4,
          title: 'Météo App',
          link: 'https://meteo-app-js.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659262197/portfolio/projectJS/meteo-app_yfrg1r.png',
          description: "Ce projet va vous entraîner à utiliser une API, manipuler des données et adapter une interface avec ces dernières.",
          github: 'https://github.com/AlexandreC6/meteo-app'
        },
        {
          id: 5,
          title: 'Générateur de cookies',
          link: 'https://generator-cookies.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659262324/portfolio/projectJS/generator-cookies_xuvoer.png',
          description: 'Le but de ce projet est de créer un générateur de Cookies',
          github: 'https://github.com/AlexandreC6/cookies-generator'
        },
        {
          id: 6,
          title: 'Générateur de linear gradient',
          link: 'https://color-linear-gradient-generator.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659370922/portfolio/projectJS/generator-gradient_ddt2re.png',
          description: 'Le but de ce projet est de manipuler des inputs de couleurs afin de créer des "linear-gradient" et pouvoir modifier le DOM avec les données du user.',
          github: 'https://github.com/AlexandreC6/Generator-gradient'
        },
        {
          id: 7,
          title: 'Pomodorro App',
          link: 'https://pomodoro-appjs.netlify.app/',
          background: "https://res.cloudinary.com/dguwsqu9j/image/upload/v1659448917/portfolio/projectJS/pomodoro-app.png",
          description: "Le système Pomodoro est une technique de gestion de temps qui consiste à travailler pendant 30-45 minutes puis à prendre un repos de quelques minutes, et recommencer le tout plusieurs fois.",
          github: 'https://github.com/AlexandreC6/pomodoro-app'
        },
        {
          id: 8,
          title: "Clone Unsplash",
          link: 'https://scroll-inifni-unsplash.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659449148/portfolio/projectJS/clone-unsplash.png',
          description: "Utiliser l'API de la banque d'images Unsplash afin d'intégrer un scroll infini + un système de recherche",
          github: 'https://github.com/AlexandreC6/Unsplash-scroll-Infini'
        },
        {
          id: 9,
          title: 'Memory Card Game',
          link: 'https://memory-card-appjs.netlify.app/',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659535570/portfolio/projectJS/memory-card_ghtylg.png',
          description: "Le but est de pouvoir cliquer sur les cartes afin d'apercevoir l'icône qu'elles contiennent, puis de retrouver les paires.",
          github: 'https://github.com/AlexandreC6/memory-card-app'
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
