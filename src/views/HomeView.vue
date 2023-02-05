
<template>
  <div class="home-container">
    <div v-if="error">{{ error }}</div>
    <div v-if="loadingPost">Loading...</div>
    <div v-if="!loadingPost" class="home-inner">
      <div class="title">Posts: {{ getTotalPosts }}</div>
      <div class="posts">
        <Post  v-for="post in posts" 
        :title="post.title" 
        :body="post.body"
        :authorId="post.userId"
        @viewPost="viewPost(post.id)"/>
      </div>
       
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import usePostsStore from "@/store/postStore"  
  import Post from "@/components/Post.vue";
 

  const { posts, loadingPost, error, getTotalPosts} = storeToRefs(usePostsStore())
  const {fetchPosts} = usePostsStore()
  const router = useRouter()

  fetchPosts().then(() => {
    
  })

  function viewPost (id: number) {
    router.push({ name: 'post', params: { postId: id }})
  }



</script>

<style scoped>
  @import "@/assets/styles/home/home.css";
</style>
