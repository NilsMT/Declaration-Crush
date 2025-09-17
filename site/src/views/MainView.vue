<template>
    <div id="main_cont">
        <HeaderComp />

        <MainComp class="section" />
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

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>

<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import MainComp from "@/components/MainComp.vue";
</script>
