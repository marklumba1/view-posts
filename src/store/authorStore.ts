import api from "@/api";
import { defineStore } from "pinia";
import usePostStore from "@/store/postStore"
import type userInterface from "@/types/userInterface"
export default defineStore({
    id: "author",
    state: () => ({
        authors: <userInterface[]>[],
        author:<userInterface>{}, 
        error:undefined,
        loadingAuthor: <Boolean>false
    }),
    getters: {
  
    },
    actions: {
        async fetchAuthors() {
            await api.get('/users')
            .then(res => this.authors = res.data)
            .catch(err => this.error = err)
        },
         async fetchAuthor(authorId: number) {
            this.loadingAuthor = true
            await api.get(`/users/${authorId}`)
            .then(res => this.author = res.data)
            .catch(err => this.error = err)
            this.loadingAuthor = false
        }
    }

}) 