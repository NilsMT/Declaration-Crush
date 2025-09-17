import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

const declarations = [
    "Je t'aime ❤️",
    "Je t'aime 😍",
    "Je t'aime 💖",
    "Je t'aime 💘",
    "Je t'aime 😘",
    "Je t'aime 💝",
    "Je t'aime 💕",
    "Je t'aime 💓",
    "Je t'aime 💗",
    "Je t'aime 💞",
    "Je t'aime 💟",
    "Je t'aime 💌",
    "Je t'aime 🥰",
    "Je t'aime 😻",
    "Je t'aime 😽",
    "Je t'aime 😚",
];

let i = 0;

setInterval(() => {
    console.log(
        `%c${declarations[i]}`,
        "font-size: 36px; color: hotpink; font-weight: bold; text-shadow: 2px 2px 4px #000;"
    );
    i = (i + 1) % declarations.length;
}, 1000);
