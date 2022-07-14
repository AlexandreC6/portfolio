import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore',{
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Camilo Breakfast'
        },
        {
          id: 2,
          title: 'Find a coach'
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
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  }
})
