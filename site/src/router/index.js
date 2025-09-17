import { createRouter, createWebHistory } from "vue-router";

import Error404View from "@/views/Error404View.vue";
import WIPView from "@/views/WIPView.vue";
import MainView from "@/views/MainView.vue";

const WIPPath = [
    // "UnfinishedView",
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // This is the main page of the app
        {
            path: "/",
            name: "Déclaration (pas d'impôts)",
            component: MainView,
        },

        // WIP
        {
            path: "/WIP",
            name: "Page en construction",
            component: WIPView,
        },

        // Error 404 (it last)
        {
            path: "/:pathMatch(.*)*",
            name: "Erreur 404",
            component: Error404View,
        },

        // Seduction
        {
            path: "/seduction",
            name: "je t'aime à la folie",
            component: () => import("@/views/SeductionView.vue"),
        },

        // Sad paths
        {
            path: "/sad",
            name: "Je suis triste",
            component: () => import("@/views/SadView.vue"),
        },
    ],
    /* scroll to anchor */
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
            };
        }
        return {
            x: 0,
            y: 0,
        };
    },
});

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0 });

    document.title = `${to.name}`;

    if (WIPPath.includes(to.path)) {
        next({ path: "/WIP" });
    } else {
        next();
    }
});

export default router;
