<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav-bar">
    <p>[JSON Placeholder Fetch Post using Vue and Pinia]</p>
    <nav>
      <RouterLink to="/">Posts</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style>
@import "@/assets/styles/global/global.css";
</style>
