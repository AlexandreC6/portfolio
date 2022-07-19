import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore',{
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Camilo Breakfast',
          imageOne: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1658233986/portfolio/camilo%20breakfeast/camilo-breakfast-home.jpg',
          imageTwo: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1658233993/portfolio/camilo%20breakfeast/camilo-breakfast-list-store.jpg',
          imageThree: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1658233996/portfolio/camilo%20breakfeast/camilo-breakfast-payment.jpg'
        },
        {
          id: 2,
          title: 'Find a coach',
          imageOne: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1658233996/portfolio/camilo%20breakfeast/camilo-breakfast-payment.jpg',
          imageTwo: 'https://res.cloudinary.com/dguwsqu9j/image/upload/v1658235050/portfolio/Find-a-coach/find-a-coach-details.png'
        },
        {
          id: 3,
          title: 'Project Omega'
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
