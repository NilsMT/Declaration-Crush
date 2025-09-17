<template>
    <div id="main_cont">
        <HeaderComp :with-home="true" />

        <div class="section">
            <h2>Je suis triste 😔</h2>
            <img src="../assets/img/Seduction/sad.gif" />
            <router-link class="btn btn-normal" id="bigassbtn" to="/">
                *S'excuser*
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

h2 {
    margin: 0;

    padding: var(--padding);
    background-color: var(--bg);
    border-radius: var(--radius);
    box-shadow: 0px 0px 20px #0005;
}

#main_cont {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

img {
    width: fit-content;
    background-color: var(--bg);
    border-radius: var(--radius);
    box-shadow: 0px 0px 20px #0005;
    aspect-ratio: 10/6;
    height: auto;
}

#bigassbtn {
    font-size: 1.5em;
    padding: 1em 1em;
}

#bigassbtn {
    transition: transform 0.2s ease, background-color 0.2s ease;
}

#bigassbtn:hover {
    transform: scale(1.1);
    animation: haloPulse 0.5s infinite ease-in-out;
    box-shadow: 0 0 0 4px var(--bg-light), 0 0 40px 20px var(--bg-light),
        0 0 80px 40px var(--bg-light);
}

@keyframes haloPulse {
    0% {
        box-shadow: 0 0 0 4px var(--bg-light), 0 0 40px 20px var(--bg-light),
            0 0 80px 40px var(--bg-light);
    }
    50% {
        box-shadow: 0 0 0 4px transparent;
    }
    100% {
        box-shadow: 0 0 0 4px var(--bg-light), 0 0 40px 20px var(--bg-light),
            0 0 80px 40px var(--bg-light);
    }
}
</style>

<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
</script>
