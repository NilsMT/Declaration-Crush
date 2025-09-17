<template>
    <div id="cont">
        <div id="code">
            <span>4</span>
            <img src="../assets/img/Erreur404/think.png" />
            <span>4</span>
        </div>

        <div id="text">Bah alors ? tu t'es perdu ?</div>

        <div id="box">
            <router-link class="btn btn-normal" to="/">
                Reviens là
                <span class="material-symbols-outlined"> home </span>
            </router-link>

            <ThemeButtonComp id="theme"></ThemeButtonComp>
        </div>
    </div>
</template>

<style scoped>
#cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: var(--gap);
    color: var(--text);
}

#box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap);
    background-color: var(--bg);
    padding: var(--padding);
    border-radius: var(--radius);
    box-shadow: 0px 0px 20px #0005;
}

#code {
    font-size: 10rem;
    margin: 0px;
    padding: var(--padding);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    background-color: var(--bg);
    border-radius: var(--radius);
    box-shadow: 0px 0px 20px #0005;
}

#code > img {
    width: 9rem;
    aspect-ratio: 1 / 1;
}

#text {
    background-color: var(--bg);
    padding: var(--padding);
    border-radius: var(--radius);
}

:root.light #code > img {
    filter: invert(1);
}
</style>

<script setup>
import ThemeButtonComp from "@/components/ThemeButtonComp.vue";
</script>
