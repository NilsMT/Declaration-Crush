<template>
    <header>
        <!-- Thème -->
        <ThemeButtonComp id="theme" />

        <!-- Home link if withHome is true -->
        <router-link
            v-if="withHome"
            to="/"
            class="material-symbols-outlined btn btn-normal"
        >
            home
        </router-link>
    </header>
</template>

<script setup>
import ThemeButtonComp from "./ThemeButtonComp.vue";
import { defineProps } from "vue";

const props = defineProps({
    withHome: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped>
header {
    padding: var(--padding);
    background-color: var(--bg);
    box-shadow: 0px 0px 20px #0005;
    border-radius: var(--radius);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap);
}

#theme {
    padding: var(--small-padding);
    cursor: pointer;
}

.home-link {
    padding: var(--small-padding);
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}
</style>
