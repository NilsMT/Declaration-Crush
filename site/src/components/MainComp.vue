<template>
    <div id="main">
        <h2>Salut à toi beautée prête à être séduite ? 😘</h2>
        <router-link id="bigassbtn" class="btn btn-normal" to="/seduction">
            Oui, je suis prêt à tout pour toi ! ❤️
        </router-link>

        <a v-if="clickval < 7" id="nvm" @click="handleClick">{{ nvmText }}</a>

        <router-link v-else id="nvm" class="btn btn-normal" to="/sad">
            Tu vas le regretter toute ta vie 😤
        </router-link>
    </div>
</template>

<style scoped>
h2 {
    margin: 0;

    padding: var(--padding);
    background-color: var(--bg);
    border-radius: var(--radius);
    box-shadow: 0px 0px 20px #0005;
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

#nvm {
    text-decoration: underline;
    background: none;
    text-underline-offset: 4px;
    margin: 0;

    padding: var(--padding);
    background-color: var(--bg);
    border-radius: var(--radius);
    box-shadow: 0px 0px 20px #0005;
}
</style>

<script>
import { ref, onMounted } from "vue";

export default {
    name: "MainComp",
    setup() {
        const clickval = ref(0);
        const nvmText = ref("");

        function updateText() {
            nvmText.value =
                clickval.value === 1
                    ? "En fait non, je suis pas intéressée"
                    : clickval.value === 2
                    ? "T'es sûr ?"
                    : clickval.value === 3
                    ? "Vraiment sûr ?"
                    : clickval.value === 4
                    ? "Tu me brise le coeur 💔"
                    : clickval.value === 5
                    ? "Qu'ai-je fait pour mériter ça ? 😢"
                    : "Moi je t'aime depuis le début 😞";
        }

        function handleClick() {
            clickval.value++;
            updateText();
        }

        // Auto-increment when the component mounts
        onMounted(() => {
            clickval.value++; // increment automatically
            updateText();
        });

        return {
            clickval,
            nvmText,
            handleClick,
        };
    },
};
</script>
