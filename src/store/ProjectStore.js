import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore',{
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Camilo Breakfast',
          descriptionFr: "Premier projet déployé au sein du Wagon. Conception d’une application mobile créee en une semaine pour la présentation finale du bootcamp Le Wagon Lausanne. Du design au deploiment, pour pouvoir expérimenter tous les details de la mise en production d’une application",
          descriptionEng: "First project deployed in the Wagon. Conception of a mobile application created in one week for the final presentation of the bootcamp Le Wagon. From design to deployment, to experience all the details of putting an application into production",
          technologies: ['Ruby', 'Ruby on Rails','MySQL', 'HTML', 'CSS', 'Rest Api', 'Heroku'],
          link: 'https://camilo-breakfast.herokuapp.com/',
          date: 'Avril 2022',
          github: 'https://github.com/AlexandreC6/camilo-breakfast',
        },
        {
          id: 2,
          title: 'Find a coach',
          descriptionFr: 'Conception du projet final du cours Udemy, une application de recherche de coach. Mettre en pratique toutes les connaissances acquises durant le cour de Vue Js.',
          descriptionEng: "Design of the final project of the Udemy course, a coach search application. Put into practice all the knowledge acquired during the Vue Js course.",
          technologies: ['Vue Js', 'HTML', 'CSS', 'Firebase'],
          date: 'Juin 2022',
          github: 'https://github.com/AlexandreC6/find-a-coach'
        },
        {
          id: 3,
          title: '20 projects JS',
          descriptionFr: "Je me suis lancé comme défi de consolider mes connaissances en Javascript. J'ai choisi de faire un projet Javascript tous les jours pendant 20 jours. J'actualise cette page tous les jours !",
          descriptionEng: "I challenged myself to consolidate my knowledge in Javascript. I chose to do a Javascript project every day for 20 days.  I update this page every day!",
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
          descriptionFr: "Le but de ce projet est de coder un calculateur d'IMC à partir des valeurs rentrées par un utilisateur dans les deux inputs.",
          descriptionEng: "The goal of this project is to code a BMI calculator from the values entered by a user in the two inputs.",
          github: 'https://github.com/AlexandreC6/IMC-app'
        },
        {
          id: 2,
          title: "Quizz",
          link: "https://quizz-culture-generale.netlify.app",
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659023220/portfolio/projectJS/Quizz_qtqny6.png',
          descriptionFr: 'Le but de ce projet est de coder un quizz qui affiche des messages et des couleurs différentes en fonction des résultats de ce dernier.',
          descriptionEng: "The goal of this project is to code a quiz that displays different messages and colors depending on the results of the quiz.",
          github: 'https://github.com/AlexandreC6/Quizz-app'
        },
        {
          id: 3,
          title: 'Api Wikipédia',
          link: 'https://wiki-app6.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659025184/portfolio/projectJS/Api-Wiki-Reduit_zvdgav.png',
          descriptionFr: "Le but de ce projet est de coder un système de recherche grâce à l'API de Wikipedia.",
          descriptionEng: "The goal of this project is to code a search system using the Wikipedia API.",
          github: 'https://github.com/AlexandreC6/WikiApp'
        },
        {
          id: 4,
          title: 'Météo App',
          link: 'https://meteo-app-js.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659262197/portfolio/projectJS/meteo-app_yfrg1r.png',
          descriptionFr: "Ce projet va vous entraîner à utiliser une API, manipuler des données et adapter une interface avec ces dernières.",
          descriptionEng: "This project will train you to use an API, manipulate data and adapt an interface to it.",
          github: 'https://github.com/AlexandreC6/meteo-app'
        },
        {
          id: 5,
          title: 'Générateur de cookies',
          link: 'https://generator-cookies.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659262324/portfolio/projectJS/generator-cookies_xuvoer.png',
          descriptionFr: 'Le but de ce projet est de créer un générateur de Cookies',
          descriptionEng: "The goal of this project is to create a cookie generator",
          github: 'https://github.com/AlexandreC6/cookies-generator'
        },
        {
          id: 6,
          title: 'Générateur de linear gradient',
          link: 'https://color-linear-gradient-generator.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659370922/portfolio/projectJS/generator-gradient_ddt2re.png',
          descriptionFr: 'Le but de ce projet est de manipuler des inputs de couleurs afin de créer des "linear-gradient" et pouvoir modifier le DOM avec les données du user.',
          descriptionEng: "The goal of this project is to manipulate color inputs in order to create 'linear-gradient' and be able to modify the DOM with the user data.",
          github: 'https://github.com/AlexandreC6/Generator-gradient'
        },
        {
          id: 7,
          title: 'Pomodorro App',
          link: 'https://pomodoro-appjs.netlify.app/',
          background: "https://res.cloudinary.com/dguwsqu9j/image/upload/v1659448917/portfolio/projectJS/pomodoro-app.png",
          descriptionFr: "Le système Pomodoro est une technique de gestion de temps qui consiste à travailler pendant 30-45 minutes puis à prendre un repos de quelques minutes, et recommencer le tout plusieurs fois.",
          descriptionEng: "The Pomodoro system is a time management technique that consists of working for 30-45 minutes, then taking a rest for a few minutes, and repeating the process several times.",
          github: 'https://github.com/AlexandreC6/pomodoro-app'
        },
        {
          id: 8,
          title: "Clone Unsplash",
          link: 'https://scroll-inifni-unsplash.netlify.app',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659449148/portfolio/projectJS/clone-unsplash.png',
          descriptionFr: "Utiliser l'API de la banque d'images Unsplash afin d'intégrer un scroll infini + un système de recherche",
          descriptionEng: "Use the Unsplash image bank API to integrate an infinite scroll + search system",
          github: 'https://github.com/AlexandreC6/Unsplash-scroll-Infini'
        },
        {
          id: 9,
          title: 'Memory Card Game',
          link: 'https://memory-card-appjs.netlify.app/',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659535570/portfolio/projectJS/memory-card_ghtylg.png',
          descriptionFr: "Le but est de pouvoir cliquer sur les cartes afin d'apercevoir l'icône qu'elles contiennent, puis de retrouver les paires.",
          descriptionEng: "The goal is to be able to click on the cards to see the icon they contain, and then to find the pairs.",
          github: 'https://github.com/AlexandreC6/memory-card-app'
        },
        {
          id: 10,
          title : 'Le Morpion',
          link: 'https://morpion-app-js.netlify.app/',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659550315/portfolio/projectJS/Morpion-game_zkazp2.png',
          descriptionFr: "Le jeu du morpion consiste à aligner 3 croix(X) ou ronds(O) afin de gagner la partie, à vous de jouer !",
          descriptionEng: "The tic-tac-toe game consists in aligning 3 crosses(X) or circles(O) to win the game.",
          github: 'https://github.com/AlexandreC6/morpion-game'
        },
        {
          id: 11,
          title: 'Particule JS',
          link: 'https://particulejs-app.netlify.app/',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659623714/portfolio/projectJS/ParticuleJS_ivr6ux.png',
          descriptionFr: 'Ce projet va utiliser le monde des canvas en JavaScript. Le canvas, la toile, va vous permettre de créer des formes basiques en JS (ronds, rectangle, lignes, texte, etc...).',
          descriptionEng: "This project will use the world of canvas in JavaScript. The canvas will allow you to create basic shapes in JS (circles, rectangles, lines, text, etc...).",
          github: 'https://github.com/AlexandreC6/particule-js'
        },
        {
          id: 12,
          title: 'Typing Game',
          link: 'https://typing-js.netlify.app/',
          background: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1659624021/portfolio/projectJS/Typing-game_s6v7ik.png',
          descriptionFr: 'Un jeu sympathique qui permet de mesurer sa vitesse de frappe sur une minute.',
          descriptionEng: "A nice game that allows you to measure your typing speed over one minute.",
          github: 'https://github.com/AlexandreC6/Typing-test'
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
