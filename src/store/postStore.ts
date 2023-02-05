import {defineStore} from 'pinia'
import api from '@/api'
import type postInterface from '@/types/postInterface'
import authorStore from './authorStore'
import commentsStore from './commentsStore'
export default defineStore({
    id: 'posts',
    state: () => ({
        posts: <postInterface[]>[],
        post: <postInterface>{},
        loadingPost: <Boolean>false,
        error: null
    }),
    getters: {
        getTotalPosts: (state) => state.posts.length
    },
    actions: {
        
        async fetchPosts () {
            this.loadingPost = true
            await api.get(`posts`)
            .then(res => this.posts = res.data)
            .catch(err => this.error = err)
            this.loadingPost = false
        },
        async fetchPost(id:number){
            this.loadingPost = true
            await api.get(`posts/${id}`)
            .then(res => {
                const {fetchAuthor} = authorStore()
                const {fetchComments} = commentsStore()
                this.post = res.data
                fetchAuthor(this.post.userId)
                fetchComments(this.post.id)
            })
            .catch(err => this.error = err)
            this.loadingPost = false
        }
    }

})

