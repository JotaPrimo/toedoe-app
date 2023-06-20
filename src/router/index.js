import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    routes,
    history: createWebHistory(),
    // linkActiveClass: "active"
})

router.beforeEach((to, from) => {
    // o false me impede de ir para proxima rota
   
   if (to.meta.auth) { 
        return { 
            name: "login",
             query: {
                redirect: to.fullPath,
             }
        };
   }

})

export default router
