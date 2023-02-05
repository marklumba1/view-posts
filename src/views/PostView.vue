<template >
    <div class="postview-container">
        <div v-if="loadingPost || loadingAuthor || loadingComment">Loading post...</div>
        <div class="post" v-else>
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
            <div class="author">
                <p>-{{ author.name }}</p>
            </div>
            <div class="comments">
                <p>Comments:</p>
                <div v-for="comment in comments" class="comment">
                    <!-- {{ comment }} -->
                    <p>{{ comment.body }}</p>
                    <p class="user"><small>-{{ comment.email }}</small></p>
                </div>
            </div>
          
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import usePostsStore from '@/store/postStore'
import authorStore from '@/store/authorStore';
import commentsStore from '@/store/commentsStore';
import { storeToRefs } from 'pinia';

    const route = useRoute()
    const {post, loadingPost} = storeToRefs(usePostsStore())
    const {author, loadingAuthor} = storeToRefs(authorStore())
    const {comments, loadingComment} = storeToRefs(commentsStore())
    const {fetchPost} = usePostsStore()
  
    fetchPost(Number(route.params.postId))
</script>
<style scoped>
    @import '@/assets/styles/postView/postview.css';
</style>