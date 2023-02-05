import api from "@/api";
import type comment from "@/types/commentInterface";
import { defineStore } from "pinia";
export default defineStore({
    id: `comments`,
    state: () => ({
      
        comments: <comment[]>[],
        loadingComment: <boolean>false,
        error: undefined

    }),
    getters: {
       
    },
    actions: {
        async fetchComments(id: number){
            this.loadingComment = true
            api.get(`/comments`, {
                params: {
                    postId: id
                }
            })
            .then(res => this.comments = res.data)
            .catch(err => this.error = err)
            this.loadingComment = false
        }
    }
})