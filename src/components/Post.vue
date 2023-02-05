<template>
    <div class="post-container" @click="$emit('viewPost')">
        <h4>{{ title.toUpperCase() }}</h4>
        <p>{{ body }}</p>
    </div>
</template>
<script setup lang="ts">
interface props {
    title: string,
    body: string
}
withDefaults(defineProps<props>(),{
    title: '',
    body: ''
})

</script>
<style>
    @import "@/assets/styles/post/post.css";
</style>