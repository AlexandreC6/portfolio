import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore',{
  // state
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Projet 1'
        },
        {
          id: 2,
          title: 'Project 2'
        },
        {
          id: 3,
          title: 'Project 3'
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
