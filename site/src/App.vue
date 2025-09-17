<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <div id="app_cont">
        <RouterView />
    </div>

    <video autoplay loop muted playsinline id="bg-video">
        <source src="@/assets/mp4/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</template>

<style scoped>
#app_cont {
    position: relative;
    min-height: 100vh;
    z-index: 1; /* keeps content above the video */
    color: var(--text);
}

#bg-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* covers entire viewport */
    z-index: -1; /* sends video behind content */
}

:global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden; /* hides scrollbars */
    background-color: var(--bg);
}
</style>
