<template>
    <div id="main_cont">
        <HeaderComp :with-home="true" />

        <img id="crush" src="../assets/img/Seduction/Crush.jpg" />
    </div>
</template>

<style scoped>
#main_cont {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

img {
    background-color: var(--bg);
    border-radius: var(--radius);
    box-shadow: 0px 0px 20px #0005;
    aspect-ratio: 4/3;
    height: calc(100% - var(--padding) * 10);
    width: auto;

    border-radius: var(--radius);
}

@media (max-width: 768px) {
    img {
        width: 100%; /* fill container width */
        height: auto; /* keep aspect ratio */
        aspect-ratio: auto; /* optional, since width/height handles it */
        max-width: 100%; /* prevents overflow */
        box-shadow: 0px 0px 15px #0005; /* slightly smaller shadow for mobile */
    }
}

.btn {
    scale: 1.2;
}
</style>

<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
</script>
